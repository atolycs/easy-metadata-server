import os 
import json
from bottle import route, run, request

DNS_PATH = '/var/lib/libvirt/dnsmasq/'

@route('/')
def root():
    return "2023-07-14/"

@route('/2023-07-14/meta-data')
def metadata():
    return 'instance-id\nhostname\npublic-keys/'

@route('/2023-07-14/meta-data/hostname')
def hostname():
    client_ip = request.get('REMOTE_ADDR')
    with open(os.path.join(DNS_PATH, "virbr0.status")) as f:
        for entry in json.load(f):
            if entry.get('ip-address') == client_ip:
                mac_addr = entry.get('mac-address')
                break
            else:
                return

    with open(os.path.join(DNS_PATH, "virbr0.macs")) as f:
        for entry in json.load(f):
            if mac_addr in entry.get('macs'):
                return entry.get('domain')


run(host='169.254.169.254', port=8080, debug=True)


import subprocess

wifi_name = 'Kal'

results = subprocess.check_output(['netsh', 'wlan','show','profile',wifi_name,
                                   'key=clear']).decode('utf_8').split('\n')
print(results)
results = [b.split(":")[1][1:-1] for b in results if "Key Content" in b ]

print('Wif Name :'+ wifi_name + ' , Password :'+results[0])

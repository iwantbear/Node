import sys

def getName1(name, age):
    print (name + " : " + age)

def getName2():
    print ("'2': { 'name': '이순신', 'email': 'lees@def.com', 'phone': '0104567' }")

if __name__ == '__main__':
    # getName1(sys.argv[1], sys.argv[2])
    getName2()
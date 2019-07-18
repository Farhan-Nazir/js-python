import sys
def moves(myName):
    print("Python called by Nodejs")
    print(myName)
    sys.stdout.flush()
moves(sys.argv[1])

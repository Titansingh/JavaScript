dict ={
    '1': {'p': 23},
    '2': {'p': 34},
    '3': {'p': 1},
    '4': {'p': 98},
    '5': {'p': 9},
    '6': {'p': 393},
}

list = []

for item in dict:
       list.append(dict[item]['p'])

list.sort()

for item in dict:
    dict[item]['p']=list[int(item)-1]

print(dict)

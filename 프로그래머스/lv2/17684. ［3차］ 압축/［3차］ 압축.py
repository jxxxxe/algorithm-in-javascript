def solution(msg):
    dictonary={}
    answer = []

    for idx,alpha in enumerate('ABCDEFGHIJKLMNOPQRSTUVWXYZ'):
        dictonary[alpha]=idx+1

    i=0
    w=""
    while i<len(msg):
        w+=msg[i]
        if not w in dictonary:
            dictonary[w]=len(dictonary)+1
            answer.append(dictonary[w[:-1]])
            i-=1
            w=""
        i+=1
    answer.append(dictonary[w])
    

    return answer

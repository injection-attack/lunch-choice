import random

def choice_lunch_menu(*new_items, n):
    lunch_list = []
    lunch_list.extend(new_items)
    # return lunch_list

    lunch_dic = {}
    for menu in lunch_list:
        lunch_dic[menu] = 0

    for i in range(n):
        result = random.choice(lunch_list)
        lunch_dic[result] += 1 

    # print(lunch_dic)
    return max(lunch_dic.items(), key=lambda x: x[1])[0] 
    #비교 기준이 key : x 튜플 중 1번인덱스값 = 딕셔너리에서 각 항목 수치값





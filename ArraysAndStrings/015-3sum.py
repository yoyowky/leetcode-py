# nums is array; nums.append([] or "" or ...), append element in array
# sort array: nums.sort()

# sort+two pointer

def threeSum(nums):
    # sort array
    nums.sort()
    twoSum = 0
    l=0
    r=0
    res = []
    for i in range(len(nums)):
        # case1: [2]
        if(nums[i]>0):
            break
        # case 2: [-2,-2,0,0,2]
        if(i>0 and nums[i]==nums[i-1]): continue
        twoSum = - nums[i]
        l=i+1
        r=len(nums)-1
        while(l<r):
            if nums[l]+nums[r] == twoSum:
                print('aaa')
                res.append([nums[i], nums[l], nums[r]])
                l+=1
                r-=1
                # case3: [-2,0,0,2,2]
                while(l<r and nums[l-1]==nums[l]):
                    l+=1
            elif nums[l]+nums[r] < twoSum:
                print('bbb')
                l+=1
            else:
                print('ccc')
                r-=1
    return res



# nums = [-1,0,1,2,-1,-4]
nums = [-2,-2,0,0,2]
print(threeSum(nums))


# handle the case:
# [-2,0,0,2,2]
# [-2,-2,0,0,2]

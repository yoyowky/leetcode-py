# nums is array; nums.append([] or "" or ...), append element in array

# sort+two pointer

def threeSumClosest(nums, target):
    nums.sort()
    twoSum = 0
    l=0
    r=0
    diff=0
    for i in range(len(nums)):
        if(i>0 and nums[i]==nums[i-1]): continue
        twoSum = target - nums[i]
        l=i+1
        r=len(nums)-1
        sum=0
        while(l<r):
            sum = nums[l] + nums[r] +nums[i]
            # compare abs, to decide whether diff need to update
            if(diff==0 or abs(diff)>abs(sum-target)):
                diff = sum - target
            # l, r pointer move
            if nums[l]+nums[r] == twoSum:
                return target
            elif nums[l]+nums[r] < twoSum:
                l+=1
            else:
                r-=1
    return target+diff



nums = [-1,2,1,-4]
threeSumClosest(nums, 1)


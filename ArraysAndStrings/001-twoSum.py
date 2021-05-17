# grocery = ['bread', 'milk', 'butter']
# print(grocery)
# for i,j in enumerate(grocery):
#   print("i",i)
#   print("j",j)

# print(type(enumerate(grocery)))

# for loop in python:
# for i in range(len(nums)): // i is index
# for i in nums: // i is value


def twoSum(nums, target):
    map = {}
    for i in range(len(nums)):
        if (target-nums[i]) in map:
            return [map[target-nums[i]],i]
        else:
            map[nums[i]] = i
    return None

nums = [2,7,11,15]
twoSum(nums, 9)
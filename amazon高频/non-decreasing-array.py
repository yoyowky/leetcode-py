class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        nums.insert(0, -10**5)
        hit = False
        for i in range(2, len(nums)):
            if nums[i-1] > nums[i]:
                if hit:
                    return False
                hit = True
                
                if nums[i-2] > nums[i]:
                    nums[i] = nums[i-1]
                else:
                    nums[i-1] = nums[i-2]
        return True
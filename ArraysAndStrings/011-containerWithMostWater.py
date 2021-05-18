def maxArea(height):
    l=0
    r=len(height)-1
    area=0
    while(l<r):
        # this line should put on the above
        area = max(area, (r-l)*min(height[r],height[l]))
        if(height[l]<height[r]):
            l+=1
        else:
            r-=1
    return area
height = [1,8,6,2,5,4,8,3,7]
print(maxArea(height))


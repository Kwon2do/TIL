# 1.통분
numerator1, denominator1 = input().split(" ")
numerator2, denominator2 = input().split(" ") 
fraction_denominator = int(denominator1) * int(denominator2)
fraction_numerator = int((int(fraction_denominator)/int(denominator1))*int(numerator1))+int((int(fraction_denominator)/int(denominator2))*int(numerator2))

# 2.약분(최대공약수)
def gcd(x,y): #최대공약수, 유클리드 호제
    mod = x % y
    while mod >0:
        x = y
        y = mod
        mod = x % y
    return y   

N = gcd(fraction_numerator, fraction_denominator)
# 결과 출력
print(int(fraction_numerator/N), int(fraction_denominator/N))

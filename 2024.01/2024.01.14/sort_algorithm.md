<h1>Sort algorithm</h1>

<strong>정렬의 종류</strong>

정렬 알고리즘의 핵심 요소는 **교환, 선택, 삽입**
* 버블정렬(=단순교환정렬)
~~~java
static void swap(int[] a, int idx1, int idx2){
    int t = a[idx1];
    a[idx1] = a[idx2];
    a[idx2] = t;
}

static void bubbleSort(int[] a, int n) {
    for (int i=0; i<n-1; i++) {
        for (int j=n-1; j>i; j--) { //패스(pass)
            if (a[j-1] > a[j]) {
                swap(a, j-1, j);
            }
        }
    }
}
~~~
i가 n-1까지인 이유는 마지막 원소는 자동으로 정렬되기 때문임.
j는 끝에서부터 i앞까지의 원소를 돌면서 비교한다.
**n개의 Pass가 지난다는 것은 맨 앞부터 n개의 원소가 정렬되었다라는 뜻이다.**<br>

배열 맨 앞쪽부터 비교,교환(큰 값부터 맨뒤로 채워지는 방식)
~~~java
static void bubbleSort(int[] a, int n) {
    for (int i=n-1; i>0; i++) {
        for (int j=0; j<i; j++) { //패스(pass)
            if (a[j-1] > a[j]) {
                swap(a, j-1, j);
            }
        }
    }
}
~~~
그런데,<br>
1364789를 예시로 생각해보면<br>

**1PASS:** 1364789<br>
**2PASS:** 1364789<br>
**3PASS:** 1364789<br>
**4PASS:** 1346789<br>
**5PASS:** 1346789<br> 

원래 같으면 N-1번인 7pass를 돌아야하는데,
4PASS뒤로는 이미 정렬이 완료된 상태이다. 
이러한 경우를 고려해서 '멈춤'으로 개선한 버블 정렬 코드이다.
한 PASS 내에 교환이 하나도 안생긴다->**이미 정렬 완료**
~~~java
//개선1
  static void bubbleSort(int[] a, int n) {
        for (int i = 0; i < n - 1; i++) {
            int exchg = 0;                          // 패스에서 교환하는 횟수
            for (int j = n - 1; j > i; j--)
                if (a[j - 1] > a[j]) {
                    swap(a, j - 1, j);
                    exchg++;
                }
            if (exchg == 0) break;                // 교환이 이루어지지 않으면 멈춤
        }
    }
~~~

그렇다면, 마지막으로 원소를 교환한 위치를 저장해서 그 위치를 다음 PASS의 범위로 지정하는 방법으로 개선할 수 있다.
159102로 1Pass를 돌려보면,
159102
159012
150912
105912
015912 <- 마지막으로 교환한 곳의 위치를 저장(last)한다.<br>
저장 후 다음 Pass는 last를 범위로 진행한다.

~~~java
//개선2
  static void bubbleSort(int[] a, int n) {
    int k=0;
    while (k < n-1) {
        int last = n-1;
        for(int j = n-1; j>k; j--) {
            if (a[j-1] > a[j]) {
                swap(a, j-1, j);
                last = j;
            }
            k = last;
        }
    }
}
~~~
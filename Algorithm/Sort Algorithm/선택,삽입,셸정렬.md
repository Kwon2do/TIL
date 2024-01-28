<h1>2024.01.15(토) - Sort</h1>

<h2>학습내용🔥</h2>

* **선택정렬(Selection Sort)**
* **삽입정렬(Insertion Sort)**
* **셸정렬(Shell Sort)**

---

<h2>선택정렬(Selection Sort)</h2>

이름에서도 알 수 있듯이, 선택하여 정렬하는 알고리즘이다.<br>
배열에서 가장 작은 원소를 선택해서 맨 앞으로 정렬을 한다.<br>
**가장 작은 요소를 맨 앞으로, 두 번째 작은 요소는 맨 앞에서 두 번째로 이동하는 작업**
~~~javascript
static void selectionSort(int[] a, int n){
    //n-1번 반복, 1사이클에 1개의 원소가 맨 앞부터 정렬됨.
    for (int i=0; i < n-1; i++) {
        //아직 정렬되지 않은 부분에서 가장 작은 요소 인덱스 저장
        int min = i; 
        //만약 min보다 작은 요소가 나오면 min 업데이트
        for (int j= i+1; j<n; j++){
            if(a[j] < a[min]) {
                min = j;
            }
        }
        //자리 변경
        swap(a, i, min);
    }
}
~~~

<h2>삽입정렬(Insertion Sort)</h2>
<strong>동작방식</strong><br>

**2번째 요소부터 시작, 왼쪽에 이웃한 요소와 비교하면서 자리 찾아감(저리 비켜!!)**<br>
6 4 1 7 3 9 8 //4부터 정렬 시작<br>
4 6 1 7 3 9 8 // 1정렬 시작<br>
4 1 6 7 3 9 8<br>
1 4 6 7 3 9 8 // 1정렬 완료<br>
...<br>

~~~javascript
public static void sort(int[] arr, int n) {
        //두 번째 원소부터 정렬 시작
        for(int i=1; i<n; i++) { 
            int j;
            //두 번째 원소 값 저장
            int tmp = arr[i]; 
            // j>0 : 정렬된 열의 왼쪽 끝에 도달
            for (j=i; j>0 && arr[j-1] > tmp; j--){ 
                arr[j] = arr[j-1];
            }
            arr[j] = tmp;
        }
    }
~~~

<h2>셸 정렬(Shell Sort)</h2>

**삽입정렬의 장점을 살리고 단점을 보완**하여 **좀 더 빠르게 정렬**하는 알고리즘<br>
퀵 정렬이 고안되기 전까지 셸 정렬이 가장 빠른 알고리즘으로 알려졌음.

> **삽입정렬의 장점 및 단점**<br>
1 2 3 4 5 6 0 6 이라는 배열이 있다고 가정하자.<br>
삽입 정렬을 이용하면, 1~5까지는 정렬이 필요없다. 즉, 원소의 이동(값의 대입)이 필요하지 않다. 그러나, 0을 삽입하려면 총 6회에 걸쳐서 이동을 해야한다.<br><br>
**장점** : 정렬이 되었거나, 그 상태에 가까우면 정렬속도가 아주 빠름<br>
**단점** : 삽입할 곳이 멀리 떨어져 있으면 이동 횟수가 많아진다.

**셸 정렬(Shell Sort)?<br>**
일정한 간격으로 서로 떨어져 있는 두 요소를 그룹으로 묶어 대략 정렬을 수행<br>
-> 간격을 좁혀 그룹의 수를 줄이면서 정렬을 반복하여 요소의 이동 횟수를 줄이는 방법.<br>

**조금이라도 더 정렬된 상태에 가까운 배열로 만들어 놓은 다음에 삽입정렬을 사용하는 것**

~~~javascript
 public static void sort(int[] arr, int n) {
        for(int h = n / 2; h>0; h /= 2) {
            for (int i = h; i<n; i++) {
                int j;
                int tmp = arr[i];
                for (j=i-h; j>=0 && arr[j]>tmp; j-= h) {
                    arr[j+h] = arr[j];
                }
                arr[j+h] = tmp;
            }
        }
    }
~~~

💡<br>
**h값은 서로 배수가 되지 않도록 만들어야 요소가 충분히 섞여서 효율적으로 정렬이 가능**

예를 들어, h = ... -> 121 -> 40 -> 13 -> 4 -> 1<br>
3배한 값에 1을 더하는 식이다.<br>

~~~javascript
static void shellSort(int[] a, int n) {
        int h;
        for (h = 1; h < n; h = h * 3 + 1){
        for ( ; h > 0; h /= 3)
            for (int i = h; i < n; i++) {
                int j;
                int tmp = a[i];
                for (j = i - h; j >= 0 && a[j] > tmp; j -= h)
                    a[j + h] = a[j];
                a[j + h] = tmp;
            }
    }
}
~~~
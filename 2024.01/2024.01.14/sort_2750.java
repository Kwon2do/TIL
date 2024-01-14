//백준 2750번 문제(난이도: 브론즈2)
//버블정렬 사용
import java.util.*;
public class Main {
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
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr= new int[n];
        for (int i=0; i<n; i++) {
            arr[i] = sc.nextInt();
        }
        bubbleSort(arr, n);
        for (int i=0; i<arr.length; i++) {
            System.out.println(arr[i]);
        }
        }
}
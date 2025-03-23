#include<iostream>
using namespace std;
int main(){
    int arr[]={1,-2,1,0,5};
    int target=0;
    arr.sort(arr.begin(),arr.end());
    int s=arr.size();
    for (int i = 0; i < s; i++)
    {
        int j=i+1;
        int k=s-1;
        while(j<k){
            if(arr[i]+arr[j]+arr[k]==target){
                cout<<true;
            }
            else if(arr[i]+arr[j]+arr[k]<target){
                j++;
            }
            else{
                k--;
            }
        }
    }
    return false;
}
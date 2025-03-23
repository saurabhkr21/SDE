#include<iostream>
using namespace std;
int main(){
    int arr[]={1,-2,1,0,5};
    int target=0;
    sort(arr.begin(),arr.end());
    int i=0,j=4;
    while(i<j){
        if(arr[i]+arr[j]==target){
            cout<<true;
        }
        else if(arr[i]+arr[j]<target){
            i++;
        }
        else{
            j--;
        }
    }

    return false;
    
}
#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    while(n--){
        vector <int> arr;
        int x;
        cin>>x;
        for(int i=0;i<x-2;i++){
            int y;
            cin>>y;
            arr.push_back(y);
        }
        
        int l=arr.size();
        int count_0=0;
        for(int i=1;i<l;i++){
            if(arr[i]==0){
                count_0++;
            }
            if(arr[i]==1 && count_0<=1){
                cout<<"no";
                break;
            }
            
        }
        cout<<"yes";
    }
    return 0;
}
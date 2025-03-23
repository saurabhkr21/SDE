#include<iostream>
#include<cmath>
#include<string>
#include<vector>
using namespace std;
int main(){
    int l,r;
    cin>>l>>r;
    vector<int>v;
    int a,p;
    for(int i=l;i<=r;i++){
        p=0;
        int t=i;
        while (t>0){
            a=t%10;
            p=(p*10)+a;
            t/=10;
        }
        if(p==i){
            v.push_back(i);
        }
    }
    for(int i=0;i<v.size();i++){
        cout<<v[i]<<" ";
    }
    return 0;
}
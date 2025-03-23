#include<iostream>
#include<cmath>
using namespace std;
int fact(int N){
        int f=1;
        for(int i=1;i<=N;i++){
            f=f*i;
        }
        return f;
}
    int isPerfect(int N) {
        // code here
        int a,sum=0,p=0;
        int ori=N;
        while(N>0){
            a=N%10;
            p=fact(a);
            sum+=p;
            N/=10;
        }
        if(sum==ori){
            return 1;
        }
        else{
            return 0;
        }
    }
    int main(){
        int N;
        cin>>N;
        cout<<isPerfect(N)<<endl;
        return 0;
    }
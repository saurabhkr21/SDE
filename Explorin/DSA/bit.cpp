#include<iostream>
using namespace std;
int main(){
    int n,x=0;
    cin>>n;
    while(n--){
        string a;
        cin>>a;
        if(a.find("++") != string::npos){
            x++;
        }
        else if(a.find("--") != string::npos){
            x--;
        }
    }
    cout<<x;
    return 0;
}
#include<iostream>
using namespace std;
int main(){
    int n;
    cin >> n;
    for(int i = 0; i < n; i++){
        string word;
        cin >> word;
        int s = word.size();
        if(s > 10){
            cout << word.front() << s - 2 << word.back() << endl;
        }
        else{
            cout << word << endl;
        }
    }
    return 0;
}
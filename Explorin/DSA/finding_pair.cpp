#include <iostream>
using namespace std;

// Function to calculate the minimum number of socks to draw to guarantee a matching pair
int maximumDraws(int n) {
    // If there are n colors of socks, taking (n + 1) socks ensures at least one matching pair
    return n + 1;
}

int main() {
    int t; // Number of test cases
    cin >> t;

    while (t--) {
        int n; // Number of sock colors in the drawer
        cin >> n;
        cout << maximumDraws(n) << endl;
    }

    return 0;
}

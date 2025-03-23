#include <iostream>
#include <cmath>
using namespace std;

// Function to check if a number is prime
bool isPrime(int n) {
    if (n <= 1) return false;  // 1 and numbers <= 1 are not prime
    if (n == 2) return true;   // 2 is prime
    if (n % 2 == 0) return false;  // Exclude even numbers > 2

    // Check divisibility from 3 to sqrt(n)
    for (int i = 3; i <= sqrt(n); i += 2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

// Function to count twin primes in the interval [a, b]
int countTwinPrimes(int a, int b) {
    int twinCount = 0;

    // Iterate over the range [a, b]
    for (int p1 = a; p1 <= b - 2; ++p1) {
        // Check if p1 and p1 + 2 are both prime
        if (isPrime(p1) && isPrime(p1 + 2)) {
            ++twinCount;
        }
    }

    return twinCount;
}

int main() {
    int a, b;
    cin >> a >> b;
    
    // Find and print the number of twin prime pairs in the interval [a, b]
    cout << countTwinPrimes(a, b) << endl;
    
    return 0;
}

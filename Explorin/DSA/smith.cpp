#include <iostream>
#include <cmath>
#include <vector>
using namespace std;


int sumOfDigits(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}


int sumOfPrimeFactorsDigits(int n) {
    int sum = 0;

    while (n % 2 == 0) {
        sum += sumOfDigits(2);
        n /= 2;
    }
    for (int i = 3; i <= sqrt(n); i += 2) {
        while (n % i == 0) {
            sum += sumOfDigits(i);
            n /= i;
        }
    }
    if (n > 2) {
        sum += sumOfDigits(n);
    }

    return sum;
}

bool isPrime(int n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (int i = 3; i <= sqrt(n); i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}

// Function to check if the given number is a Smith number
bool isSmithNumber(int n) {
    if (isPrime(n)) return false;
    int sumDigits = sumOfDigits(n);
    int sumPrimeFactors = sumOfPrimeFactorsDigits(n);
    return sumDigits == sumPrimeFactors;
}

int main() {
    int n;
    cin >> n;

    if (isSmithNumber(n)) {
        cout << "1" << endl;  // Smith number
    } else {
        cout << "0" << endl;  // Not a Smith number
    }

    return 0;
}

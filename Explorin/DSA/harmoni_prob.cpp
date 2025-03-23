#include <iostream>
#include <iomanip>

// Function to print the first 'n' terms of a harmonic progression
void harmonicProgression(int n, double a, double d) {
    for (int i = 0; i < n; ++i) {
        double term = 1.0 / (a + i * d);
        std::cout << std::fixed << std::setprecision(6) << term << " ";
    }
    std::cout << std::endl;
}

int main() {
    int n = 10; // Number of terms
    double a = 1.0; // First term of the corresponding arithmetic progression
    double d = 1.0; // Common difference

    harmonicProgression(n, a, d);

    return 0;
}

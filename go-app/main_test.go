package main

import "testing"

func TestAdd(t *testing.T) {
	result := Sum(5, 6)
	expected := 11

	if result != expected {
		t.Errorf("Sum(5,6) = %d; want %d", result, expected)
	}
}

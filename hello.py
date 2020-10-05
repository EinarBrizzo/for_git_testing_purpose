def calculator():
    ask_for_command = input("Press 1 to start or 0 to quit: ")
    while ask_for_command != 0:
        first_number = input("Enter first number")
        second_number = input("Enter second numer")
        choice_of_operation = input("Choose the operation")

        if choice_of_operation == "+":
            sum_of_numbers(first_number, second_number)
        elif choice_of_operation == "-":
            deduction(first_number, second_number)
        elif choice_of_operation == "*":
            multiplication(first_number, second_number)


def sum_of_numbers(x, y):
    return x = y


def multiplication(x, y):
    return x * y


def deduction(x, y):
    return x - y

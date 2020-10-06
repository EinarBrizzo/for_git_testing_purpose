def calculator():
    ask_for_command = int(input("Press 1 to start or 0 to quit: "))
    while ask_for_command != 0:
        first_number = float(input("Enter first number: "))
        second_number = float(input("Enter second numer: "))
        choice_of_operation = input("Choose the operation: ")

        if choice_of_operation == "+":
            print("The result is:", sum_of_numbers(
                first_number, second_number))
            print("Finished.")
            break
        elif choice_of_operation == "-":
            print("The result is:", deduction(first_number, second_number))
            print("Finished.")
            break
        elif choice_of_operation == "*":
            print("The result is:", multiplication(
                first_number, second_number))
            print("Finished.")
            break
        elif choice_of_operation == "/":
            print("The result is:", division(first_number, second_number))
            print("Finished")
            break


print("You quit.")


def sum_of_numbers(x, y):
    return x + y


def multiplication(x, y):
    return x * y


def deduction(x, y):
    return x - y


def division(x, y):
    return x / y


calculator()

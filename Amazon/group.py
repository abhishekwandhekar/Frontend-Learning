# Define the lists of students for each group
group_A = ["John", "Alice", "Bob", "Charlie"]
group_B = ["Eve", "Frank", "Charlie", "Grace"]
group_C = ["Bob", "Grace", "Heidi", "Mallory"]

def students_play_both_cricket_and_badminton(group_A, group_B):
    # Students who play both cricket and badminton
    return [student for student in group_A if student in group_B]

def students_play_either_cricket_or_badminton_but_not_both(group_A, group_B):
    # Students who play either cricket or badminton but not both
    return [student for student in group_A if student not in group_B] + [student for student in group_B if student not in group_A]

def students_play_neither_cricket_nor_badminton(group_A, group_B, all_students):
    # Students who play neither cricket nor badminton
    return [student for student in all_students if student not in group_A and student not in group_B]

def students_play_cricket_and_football_but_not_badminton(group_A, group_B, group_C):
    # Students who play cricket and football but not badminton
    return [student for student in group_A if student in group_C and student not in group_B]

# List of all students
all_students = ["John", "Alice", "Bob", "Charlie", "Eve", "Frank", "Grace", "Heidi", "Mallory"]

# Compute the required lists
both_cricket_and_badminton = students_play_both_cricket_and_badminton(group_A, group_B)
either_cricket_or_badminton_but_not_both = students_play_either_cricket_or_badminton_but_not_both(group_A, group_B)
neither_cricket_nor_badminton = students_play_neither_cricket_nor_badminton(group_A, group_B, all_students)
cricket_and_football_but_not_badminton = students_play_cricket_and_football_but_not_badminton(group_A, group_B, group_C)

# Print the results
print("Students who play both cricket and badminton:", both_cricket_and_badminton)
print("Students who play either cricket or badminton but not both:", either_cricket_or_badminton_but_not_both)
print("Students who play neither cricket nor badminton:", neither_cricket_nor_badminton)
print("Students who play cricket and football but not badminton:", cricket_and_football_but_not_badminton)

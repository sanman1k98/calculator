local M = {}

local display = ""

local operator = nil
local operands = { 0, nil }
local current_operand = not operator and 1 or 2
local prev_event = nil

local operations = {
  add = function(x, y) return x + y end,
  sub = function(x, y) return x - y end,
  mul = function(x, y) return x * y end,
  div = function(x, y) return x / y end,
}

local set_operation = function(op)
  operator = op
  operands[1] = tonumber(display)
  prev_event = "set_operation"
end

local append_digit = function(x)
  if prev_event == "set_operation" then
    display = ""
    current_operand = 2
    prev_event = nil
  end

  local num = operands[current_operand]

  local is_float = math.type(num) == "float"
  local last_digit = display[#display - 1]

  if x == "." and (is_float or last_digit == ".") then
    return
  end

  display = display .. tostring(x)
  num = tonumber(display) or 0

  operands[current_operand] = num
end

local evaluate = function()
  if operator == nil then return end

  local x = operands[1]
  if operands[2] == nil then
    operands[2] = x
  end
  local y = operands[2]

  local result = operations[operator](x, y)
  display = tostring(result)
  operands[1] = result
end

local clear = function()
  display = ""
  operands[1], operands[2] = 0, nil
  current_operand = 1
  operator = nil
end

M.print_display = function()
  local disp = M.get_display()
  local op = operator or "_"
  io.write(string.format("[ Calculator ]: \t%s\t%s\n", disp, op))
end

M.get_display = function()
  local disp = display
  if disp == "" then disp = "0" end
  return disp
end

M.handle_event = function(b)
  local num = tonumber(b)
  if num or b == "." then append_digit(b)
  elseif b == "c" then clear()
  elseif b == "+" or b == "a" then set_operation "add"
  elseif b == "-" or b == "s" then set_operation "sub"
  elseif b == "x" or b == "m" then set_operation "mul"
  elseif b == "/" or b == "d" then set_operation "div"
  elseif b == "=" or b == "" then evaluate()
  else
    print "not a valid button press"
  end
end

return M

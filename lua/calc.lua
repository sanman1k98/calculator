local M = {}

local display = ""

local operands = { 0, nil }
local operator = nil
local clear_on_next_digit = false

local operations = {
  add = function(x, y) return x + y end,
  sub = function(x, y) return x - y end,
  mul = function(x, y) return x * y end,
  div = function(x, y) return x / y end,
}

local set_operation = function(op)
  operator = op
  operands[1] = tonumber(display)
  clear_on_next_digit = true
end

local append_digit = function(x)
  if clear_on_next_digit then
    display = ""
    clear_on_next_digit = false
  end

  local num
  if operator then num = operands[2]
  else num = operands[1] end

  local is_float = math.type(num) == "float"
  local last_digit = display[#display - 1]

  if x == "." and (is_float or last_digit == ".") then
    return
  end

  display = display .. tostring(x)
  num = tonumber(display) or 0

  if operator then
    operands[2] = num
  else
    operands[1] = num
  end
end

local evaluate = function()
  if operator == nil then return end
  local x, y = operands[1], operands[2]
  if y == nil then y = x end
  local result = operations[operator](x, y)
  display = tostring(result)
  operands[1] = result
end

local clear = function()
  display = "0"
  operands[1], operands[2] = 0, nil
  operator = nil
end

M.print_display = function()
  local disp = display
  if disp == "" then disp = "0" end
  print("[ Calculator ]: ", disp)
end

M.press_button = function(b)
  local num = tonumber(b)
  if num then
    append_digit(num)
  elseif b == "." then
    append_digit(b)
  elseif b == "c" then clear()
  elseif b == "+" then set_operation "add"
  elseif b == "-" then set_operation "sub"
  elseif b == "x" then set_operation "mul"
  elseif b == "/" then set_operation "div"
  elseif b == "=" then evaluate()
  else
    print "not a valid button press"
  end
end

return M

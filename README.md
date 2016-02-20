![Socket](https://github.com/RamonGilabert/Socket/blob/master/resources/socket.png)

# Socket

This pretends to be a simple and easy to use socket client for [socket.io](http://socket.io), for now, it will be for personal use only as the address will connect in code rather than with the given address.

It contains of 3 fields, the first one to add the *address* you want to send the socket to. The second one which contains the *event* that you want to emit the socket to and finally the *body* of it.

This is a custom implementation, so it will connect to a *given address in code* for now, although that might change in future development.

## Example data

The data used to send a socket in my personal case.

```
{
   "id": 1,
   "controllerID": 1,
   "status": false,
   "intensity": 1,
   "red": 1,
   "green": 1,
   "blue": 1,
   "token": "td832d3q6r5o7lc0ajeqg5b8bb0e1q7f"
}
```

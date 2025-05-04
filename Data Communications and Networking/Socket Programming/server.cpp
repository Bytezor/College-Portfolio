#include <iostream>
#include <cstring>
#include <cstdlib>
#include <ctime>
#include <unistd.h>
#include <arpa/inet.h>

using namespace std;
#define PORT 11031

int main() {
    int server_fd, new_socket;
    struct sockaddr_in address;
    socklen_t addrlen = sizeof(address);

    server_fd = socket(AF_INET, SOCK_STREAM, 0);
    if (server_fd == -1) {
        cerr << "Socket creation failed\n";
        return 1;
    }

    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(PORT);

    if (bind(server_fd, (struct sockaddr*)&address, sizeof(address)) < 0) {
        cerr << "Bind failed\n";
        return 1;
    }

    if (listen(server_fd, 3) < 0) {
        cerr << "Listen failed\n";
        return 1;
    }
    cout << "Server listening on port " << PORT << "...\n";

    new_socket = accept(server_fd, (struct sockaddr*)&address, &addrlen);
    if (new_socket < 0) {
        cerr << "Accept failed\n";
        return 1;
    }

    std::srand(std::time(0));
    int responseNum = std::rand() % 20;
    const char* response = "Error Recieving Response.";

    switch (responseNum) {
        case 0:
            response = "It is certain.";
            break;
        case 1:
            response = "It is decidedly so.";
            break;
        case 2:
            response = "Without a doubt.";
            break;
        case 3:
            response = "Yes definitely.";
            break;
        case 4:
            response = "You may rely on it.";
            break;
        case 5:
            response = "As I see it, yes.";
            break;
        case 6:
            response = "Most likely.";
            break;
        case 7:
            response = "Outlook good.";
            break;
        case 8:
            response = "Yes.";
            break;
        case 9:
            response = "Signs point to yes.";
            break;
        case 10:
            response = "Reply hazy, try again.";
            break;
        case 11:
            response = "Ask again later.";
            break;
        case 12:
            response = "Better not tell you now.";
            break;
        case 13:
            response = "Cannot predict now.";
            break;
        case 14:
            response = "Concentrate and ask again.";
            break;
        case 15:
            response = "Don't count on it.";
            break;
        case 16:
            response = "My reply is no.";
            break;
        case 17:
            response = "My sources say no.";
            break;
        case 18:
            response = "Outlook not so good.";
            break;
        case 19:
            response = "Very doubtful.";
            break;    
    }

    send(new_socket, response, strlen(response), 0);
    cout << "Response sent to client: " << response << std::endl;

    close(new_socket);
    close(server_fd);

    return 0;
}
class MessageService {
    send_message(text) {
        console.log('MESSAGE SERVICE - new message:');
        console.log(text);
        return {
            success:true
        }
    }
    clear_message() {
        console.log('MESSAGE SERVICE - clear message:');
        return {
            success:true
        }
    }
}
export default new MessageService();
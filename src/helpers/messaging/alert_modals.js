import Swal from 'sweetalert2'


export function createAlert_success(body, title=null) {
    createAlert(title, body, 'success');
}
export function createAlert_error(body, title=null) {
    createAlert(title, body, 'error');
}
export function createAlert_warning(body, title=null) {
    createAlert(title, body, 'warning');
}
export function createAlert_info(body, title=null) {
    createAlert(title, body, 'info');
}
export function createAlert_question(body, title=null) {
    createAlert(title, body, 'question');
}
export function createAlert(body, title=null, icon=null) {
    Swal.fire({
        title: title,
        html: body,
        icon: icon,
    })
}


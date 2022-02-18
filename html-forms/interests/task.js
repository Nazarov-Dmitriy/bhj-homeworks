document.querySelector('.interests').addEventListener('change', (e) => {

    function changeList(item) {

        if (item.closest('label').nextElementSibling !== null) {
            if (item.checked == false) {
                Array.from(item.closest('label').nextElementSibling.children).map(element => {
                    element.children[0].children[0].checked = false;
                });
            } else {
                Array.from(item.closest('label').nextElementSibling.children).map(element => {
                    element.children[0].children[0].checked = true;
                });
            }
            Array.from(item.closest('label').nextElementSibling.children).map(el => {
                if (el.children[1] !== undefined) {
                    changeList(el.children[0].children[0]);
                }
            });
        }

    }

    function reverceChangeList(item) {
        if (item.closest('.interest__check')) {
            let a = item.closest('.interests').parentElement;

            let checked = 0;
            let indeterminate = 0;
            if (a.children.length > 1) {
                Array.from(a.children[1].children).map(element => {
                    if (element.childNodes[1].children[0].checked == true) {
                        checked++;
                    }
                    if (element.childNodes[1].children[0].indeterminate == true) {
                        indeterminate++;
                    }
                });
            }

            if (a.children.length > 1) {
                if (checked == a.children[1].children.length) {
                    if (a.children[0].childNodes[1].indeterminate == true) {
                        a.children[0].childNodes[1].indeterminate = false;
                    }
                    a.children[0].childNodes[1].checked = true;


                } else if (checked > 0) {
                    a.children[0].childNodes[1].indeterminate = true;
                    a.children[0].childNodes[1].checked = false;
                } else {

                    if (a.children[0].childNodes[1].indeterminate == true && checked > 0) {
                        a.children[0].childNodes[1].indeterminate = true;
                    } else if (indeterminate > 0) {
                        a.children[0].childNodes[1].indeterminate = true;
                    } else {
                        a.children[0].childNodes[1].indeterminate = false;
                    }
                    a.children[0].childNodes[1].checked = false;
                }
            }
            reverceChangeList(a.children[0].childNodes[1]);
        }

    }

    function result() {
        changeList(e.target);
        reverceChangeList(e.target);
    }

    result();
});
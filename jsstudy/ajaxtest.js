// 실습 3)
// http://172.30.1.34:9999/ajaxTest/members.xml
// 1. AJAX통신으로 xml데이터를 읽어온다.
// 2. member객체를 생성하고 admin객체와 user객체가
//    member객체를 상속받도록 한다.
// 3. 읽어온 데이터를 화면에 출력한다.
// $.get({
//     url: 'http://172.30.1.34:9999/ajaxTest/members.xml',
//     dataType: 'xml',
//     success: function(data) {
//         console.log(data);
//     }
// });
// function Member(mtype, mid, mname) {
//     this.mtype = mtype,
//     this.mid = mid,
//     this.mname = mname
// }
// function Admin(mpart) {
//     this.mpart = mpart,
//     __proto__ = Member
// }
// function User(memail) {
//     this.memail = memail,
//     __proto__ = Member
// }
// $(data).find('member').each(function() {
//     let mtype = $(this).find('mtype').text();
//     let mid = $(this).find('mid').text();
//     let mname = $(this).find('mname').text();

//     if(mtype === 'admin') {
//         new Admin(mpart);
//     } else if(mtype === 'user') {
//         new User(memail);
//     }
// });
$.ajax({
    url: 'http://172.30.1.34:9999/ajaxTest/members.xml',
    dataType: 'xml',
    success: function (data) {
        // 2. member객체를 생성하고 admin객체와 user객체가
        //    member객체를 상속받도록 한다.
        function Member(mtype, mid, mname) {
            this.mtype = mtype;
            this.mid = mid;
            this.mname = mname;
        }

        function Admin(mpart, mid, mname) {
            Member.call(this, 'admin', mid, mname);
            this.mpart = mpart;
        }
        Admin.prototype = Object.create(Member.prototype);

        function User(memail, mid, mname) {
            Member.call(this, 'user', mid, mname);
            this.memail = memail;
        }
        User.prototype = Object.create(Member.prototype);

        // 3. 읽어온 데이터를 화면에 출력한다.
        $(data).find('member').each(function () {
            let mtype = $(this).find('mtype').text();
            let mid = $(this).find('mid').text();
            let mname = $(this).find('mname').text();

            if (mtype === 'admin') {
                let mpart = $(this).find('mpart').text();
                let printMpart = new Admin(mpart, mid, mname, mtype);
                console.log(printMpart);
            } else if (mtype === 'user') {
                let memail = $(this).find('memail').text();
                let printMemail = new User(memail, mid, mname, mtype);
                console.log(printMemail);
            }
        });
    },
    error: function (error) {
        console.error('Error loading XML:', error);
    }
});

// 실습 4)
// http://172.30.1.34:9999/ajaxTest/members.json
// 1. AJAX통신으로 json데이터를 읽어온다.
// 2. member객체를 생성하고 admin객체와 user객체가
//    member객체를 상속받도록 한다.
// 3. 읽어온 데이터를 화면에 출력한다.
// console.log('success');
//  $.get({
//     url: 'http://172.30.1.34:9999/ajaxTest/members.json',
//     success: function(data) {
//         const valueArray = Object.values(data);
//         const resultArray = [];
//         $("#members_json li").each(function(idx) {
//             let eachObj = valueArray[idx];
//             if (admin.mpart = eachObj.mpart) {
//                 admin.mtype = eachObj.mtype;
//                 admin.mid = eachObj.mid;
//                 admin.mname = eachObj.mname;
//                 resultArray.push(admin);              
//             }
//             if (user.memail = eachObj.memail) {
//                 user.mtype = eachObj.mtype;
//                 user.mid = eachObj.mid;
//                 user.mname = eachObj.mname;
//                 resultArray.push(user);              
//             }            
//             $(this).text(JSON.stringify(resultArray[idx]));
//         });
//     }
// });
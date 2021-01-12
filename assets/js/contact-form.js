function postToGoogle1() {
                var field1 = $("input[type='text'][name='name']").val();
                var field2 = $("input[type='text'][name='mobile_no']").val();
                var field3 = $("input[type='email'][name='email2']").val();
                var field4 = $("textarea[name='message']").val();

 
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSfeq3_aC3n_3k0OCtqyx04V7oUBCKybq9xOTQ_7CXCbiAOPzg/formResponse",
                    data: {"entry.53463926": field1, "entry.1497513737": field2, "entry.1975427120": field3, "entry.497989083":field4,},
                    type: "POST",
                    dataType: "xml",
                    statusCode: {
                        0: function() {
                            document.getElementById("note").innerHTML = "Thank You! We will call you soon";
                        },
                        200: function() {
                            document.getElementById("note").innerHTML = "Thank You! We will call you soon";
                        }
                    }
                });
            }
             
            $(document).ready(function(){
                $('#digita-contact-form').submit(function() {
                    postToGoogle1();
                    return false;
                });
            });
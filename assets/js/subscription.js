function postToGoogle2() {
                var field3 = $("input[type='email'][name='email']").val();
 
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSfaLW0_7jApT9KPTiV7_K6Y6bRb9SbU2AzBZbf3wjzvQRyjwg/formResponse",
                    data: {"entry.1318371336": field3},
                    type: "POST",
                    dataType: "xml",
                    statusCode: {
                        0: function() {
                            document.getElementById("subscribe-result").innerHTML = "Thank You!";
                        },
                        200: function() {
                            document.getElementById("subscribe-result").innerHTML = "Thank You!";
                        }
                    }
                });
            }
             
            $(document).ready(function(){
                $('#mc-embedded-subscribe-form').submit(function() {
                    postToGoogle2();
                    return false;
                });
            });
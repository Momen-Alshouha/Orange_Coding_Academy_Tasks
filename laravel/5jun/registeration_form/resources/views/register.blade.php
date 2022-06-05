<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>register form</title>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>
<style>
        .gradient-custom {
        /* fallback for old browsers */
        background: #f093fb;

        /* Chrome 10-25, Safari 5.1-6 */
        background: -webkit-linear-gradient(to bottom right, rgba(240, 147, 251, 1), rgba(245, 87, 108, 1));

        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        background: linear-gradient(to bottom right, rgba(240, 147, 251, 1), rgba(245, 87, 108, 1))
        }

        .card-registration .select-input.form-control[readonly]:not([disabled]) {
        font-size: 1rem;
        line-height: 2.15;
        padding-left: .75em;
        padding-right: .75em;
        }
        .card-registration .select-arrow {
        top: 13px;
        }
    

</style>
<body>
    <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
        <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
            <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
            <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                <form method="POST" action='register'>
                    @csrf
                <div class="row">
                    <div class="col-md-6 mb-4">

                    <div class="form-outline">
                        <input required name="firstname" type="text" id="firstname" class="form-control form-control-lg" />
                        <label class="form-label" for="firstname">First Name</label>
                    </div>

                    </div>
                    <div class="col-md-6 mb-4">

                    <div class="form-outline">
                        <input required name="lastname" type="text" id="lastname" class="form-control form-control-lg" />
                        <label class="form-label" for="lastname">Last Name</label>
                    </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-4 pb-2">

                    <div class="form-outline">
                        <input required name="email" type="email" id="emailAddress" class="form-control form-control-lg" />
                        <label class="form-label" for="emailAddress">Email</label>
                    </div>

                    </div>
                    <div class="col-md-6 mb-4 pb-2">

                    <div class="form-outline">
                        <input required name="phonenumber" type="tel" id="phoneNumber" class="form-control form-control-lg" />
                        <label class="form-label" for="phoneNumber">Phone Number</label>
                    </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                <div class="form-outline">
                    <input required name="password" type="password" id="password" class="form-control form-control-lg" />
                    <label class="form-label" for="password">password</label>
                </div>

            </div>
            <div class="col-md-6 mb-4 pb-2">

            <div class="form-outline">
                <input required name="confirmpassword" type="password" id="confirmpass" class="form-control form-control-lg" />
                <label class="form-label" for="confirmpass">confirm password</label>
            </div>

                    </div>
                </div>

                <div class="mt-4 pt-2">
                    <input class="btn btn-primary btn-lg" type="submit" value="register" />
                </div>

                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
</body>
</html>
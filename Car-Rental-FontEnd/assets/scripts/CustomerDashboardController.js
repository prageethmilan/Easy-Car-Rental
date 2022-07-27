generateRentId();
getLastLoginUser();
generatePaymentId();

let baseUrl = "http://localhost:8080/Car_Rental_BackEnd_war/";
let today = new Date().toISOString().slice(0, 10);
$('#txtCarTodayDate').val(today);

let regRegNo = /^[A-z ]{1,3}(-)[0-9]{4}$/;
let regBrand = /^[A-z, |0-9:./]*\b$/;
let regNoOfPassengers = /^[0-9]{1,2}$/;
let regDailyRate = /^[0-9.]{1,}$/;
let regMonthlyRate = /^[0-9.]{1,}$/;
let regFreeKmForPrice = /^[0-9.]{1,}$/;
let regFreeKmForDuration = /^[0-9.]{1,}$/;
let regLossDamageWaiver = /^[0-9.]{1,}$/;
let regPriceForExtraKm = /^[0-9.]{1,}$/;
let regCompleteKm = /^[0-9.]{1,}$/;
let regCustomerId = /^(C00-)[0-9]{4}$/;
let regLicenceNo = /^(B)[0-9]{7}$/;
let regLoginUsername = /^[A-z0-9]{6,10}$/;
let regLoginPassword = /^[A-z0-9@#$%&!*]{8,}$/;
let regName = /^[A-z .]{3,}$/;
let regAddress = /^[A-z ,.0-9]{3,}$/;
let regContactNo = /^(0)[1-9][0-9][0-9]{7}$/;
let regNicNo = /^[0-9]{9}(V)|[0-9]{12}$/;
let regRentId = /^(RT0-)[0-9]{4}$/;
let regEmail = /^[a-z0-9]{3,}(@)[a-z]{3,}(.)[a-z]{2,3}$/;
let regAmount = /^[0-9.]{1,}$/;

function getLastLoginUser() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_BackEnd_war/api/v1/login/getLastLogin",
        method: "GET",
        success: function (res) {
            let login = res.data;
            console.log(login.loginId);
            getAllUserData(login.username, login.password);
        }
    })
}

function getAllUserData(username, password) {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_BackEnd_war/api/v1/customer/set/" + username + "/" + password,
        method: "GET",
        success: function (res) {
            let customer = res.data;
            setCustomerDetails(customer);
            loadMyCarRentsToTable(customer.customerId);
        }
    })
}

function setCustomerDetails(customer) {
    $('#txtCustId').val(customer.customerId);
    $('#txtCusId').val(customer.customerId);
    $('#txtCusName').val(customer.name);
    $('#txtCusAddress').val(customer.address);
    $('#txtCusEmail').val(customer.email);
    $('#txtCusContactNo').val(customer.contactNo);
    $('#txtCusNIC').val(customer.nicNo);
    $('#txtCusLicenceNo').val(customer.licenceNo);
    $('#txtCusUsername').val(customer.username);
}

function loadMyCarRentsToTable(customerId) {
    $('#allCarRentalsTable').empty();
    $.ajax({
        url: "http://localhost:8080/Car_Rental_BackEnd_war/api/v1/CarRent/getMyCarRents/" + customerId,
        method: "GET",
        success: function (res) {
            for (const carRent of res.data) {
                let row = `<tr><td>${carRent.rentId}</td><td>${carRent.date}</td><td>${carRent.pickUpDate}</td><td>${carRent.returnDate}</td><td>${carRent.car.registrationNO}</td><td>${carRent.customer.customerId}</td><td>${carRent.driver.licenceNo}</td></tr>`;
                $('#allCarRentalsTable').append(row);
            }
        }
    })
}

$('#txtCusName').on('keyup', function (event) {
    checkCusName();
    if (event.key === "Enter") {
        if (regName.test($('#txtCusName').val())) {
            $('#txtCusAddress').focus();
        } else {
            $('#txtCusName').focus();
        }
    }
})

function checkCusName() {
    let name = $('#txtCusName').val();
    if (regName.test(name)) {
        $("#txtCusName").css('border', '2px solid green');
        return true;
    } else {
        $("#txtCusName").css('border', '2px solid red');
        return false;
    }
}

$('#txtCusAddress').on('keyup', function (event) {
    checkCusAddress();
    if (event.key === "Enter") {
        if (regAddress.test($('#txtCusAddress').val())) {
            $('#txtCusEmail').focus();
        } else {
            $('#txtCusAddress').focus();
        }
    }
})

function checkCusAddress() {
    let address = $('#txtCusAddress').val();
    if (regAddress.test(address)) {
        $("#txtCusAddress").css('border', '2px solid green');
        return true;
    } else {
        $("#txtCusAddress").css('border', '2px solid red');
        return false;
    }
}

$('#txtCusEmail').on('keyup', function (event) {
    checkCusEmail();
    if (event.key === "Enter") {
        if (regEmail.test($('#txtCusEmail').val())) {
            $('#txtCusContactNo').focus();
        } else {
            $('#txtCusEmail').focus();
        }
    }
})

function checkCusEmail() {
    let email = $('#txtCusEmail').val();
    if (regEmail.test(email)) {
        $("#txtCusEmail").css('border', '2px solid green');
        return true;
    } else {
        $("#txtCusEmail").css('border', '2px solid red');
        return false;
    }
}

$('#txtCusContactNo').on('keyup', function (event) {
    checkCusContact();
    if (event.key === "Enter") {
        if (regContactNo.test($('#txtCusContactNo').val())) {
            $('#txtCusNIC').focus();
        } else {
            $('#txtCusContactNo').focus();
        }
    }
})

function checkCusContact() {
    let contact = $('#txtCusContactNo').val();
    if (regContactNo.test(contact)) {
        $("#txtCusContactNo").css('border', '2px solid green');
        return true;
    } else {
        $("#txtCusContactNo").css('border', '2px solid red');
        return false;
    }
}

$('#txtCusNIC').on('keyup', function (event) {
    checkCusNIC();
    if (event.key === "Enter") {
        if (regNicNo.test($('#txtCusNIC').val())) {
            $('#txtCusLicenceNo').focus();
        } else {
            $('#txtCusNIC').focus();
        }
    }
})

function checkCusNIC() {
    let nic = $('#txtCusNIC').val();
    if (regNicNo.test(nic)) {
        $("#txtCusNIC").css('border', '2px solid green');
        return true;
    } else {
        $("#txtCusNIC").css('border', '2px solid red');
        return false;
    }
}

$('#txtCusLicenceNo').on('keyup', function (event) {
    checkCusLicence();
    if (event.key === "Enter") {
        if (regLicenceNo.test($('#txtCusLicenceNo').val())) {
            let res = confirm("Do you want to update your details?");
            if (res) {
                updateCustomer();
            }
        } else {
            $('#txtCusLicenceNo').focus();
        }
    }
})

function checkCusLicence() {
    let licence = $('#txtCusLicenceNo').val();
    if (regLicenceNo.test(licence)) {
        $("#txtCusLicenceNo").css('border', '2px solid green');
        return true;
    } else {
        $("#txtCusLicenceNo").css('border', '2px solid red');
        return false;
    }
}

function updateCustomer() {
    let customerId = $('#txtCusId').val();
    let name = $('#txtCusName').val();
    let address = $('#txtCusAddress').val();
    let email = $('#txtCusEmail').val();
    let contact = $('#txtCusContactNo').val();
    let nic = $('#txtCusNIC').val();
    let licenceNo = $('#txtCusLicenceNo').val();

    var customer = {
        customerId: customerId,
        name: name,
        address: address,
        contactNo: contact,
        email: email,
        nicNo: nic,
        licenceNo: licenceNo
    }

    $.ajax({
        url: baseUrl + "api/v1/customer",
        method: "PUT",
        contentType: "application/json",
        data: JSON.stringify(customer),
        success: function (res) {
            getLastLoginUser();
            swal({
                title: "Confirmation!",
                text: "Customer Updated Successfully",
                icon: "success",
                button: "Close",
                timer: 2000
            });
        },
        error: function (ob) {
            swal({
                title: "Error!",
                text: "Customer Not Updated Successfully",
                icon: "error",
                button: "Close",
                timer: 2000
            });
        }
    })
}

$('#btnUpdateCustomer').click(function () {
    if ($('#txtCusId').val() != "") {
        let res = confirm("Do you want to update your details?");
        if (res) {
            updateCustomer();
        }
    }
})

$('#btnRefreshCustomer').click(function () {
    getLastLoginUser();
})

$('#cmbType').change(function () {
    let type = $('#cmbType').find('option:selected').text();
    clearRentalFields();
    $('#cmbRegistrationNo').empty();
    $('#cmbRegistrationNo').append(new Option("-Select Registration No-", ""));
    $.ajax({
        url: baseUrl + "api/v1/car/getRegNo/" + type,
        method: "GET",
        success: function (res) {
            let i = 0;
            for (let regNo of res.data) {
                $('#cmbRegistrationNo').append(new Option(regNo, i));
                i++;
            }
        }
    })
})

$('#cmbRegistrationNo').change(function () {
    let registrationNo = $('#cmbRegistrationNo').find('option:selected').text();
    $.ajax({
        url: baseUrl + "api/v1/car/" + registrationNo,
        method: "GET",
        success: function (res) {
            let car = res.data;
            setCarDataToFields(car);
        },
        error: function (ob) {
            clearRentalFields();
        }
    })
})

function setCarDataToFields(car) {
    $('#divCarFrontView').empty();
    $('#divCarBackView').empty();
    $('#divCarSideView').empty();
    $('#divCarInteriorView').empty();

    $('#txtCarBrand').val(car.brand);
    $('#txtCarColor').val(car.color);
    $('#txtCarFuel').val(car.fuelType);
    $('#txtCarTransmission').val(car.transmissionType);
    $('#txtCarNoOfPassengers').val(car.noOfPassengers);
    $('#txtCarDailyRate').val(car.dailyRate);
    $('#txtCarMonthlyRate').val(car.monthlyRate);
    $('#txtCarFreeKmForPrice').val(car.freeKmForPrice);
    $('#txtCarFreeKmForDuration').val(car.freeKmForDuration);
    $('#txtCarLossDamageWavier').val(car.lossDamageWaiver);
    $('#txtCarPriceForExtraKm').val(car.priceForExtraKm);
    $('#txtCarCompleteKm').val(car.completeKm);

    let frontViewPath = car.frontView;
    let frontViewImg = frontViewPath.split("/media/prageeth/Disk D/GitHub Projects/Easy-Car-Rental/Car-Rental-FontEnd/assets/savedImages/Cars/")[1];
    let FrontViewImgSrc = "assets/savedImages/Cars/" + frontViewImg;

    let backViewPath = car.backView;
    let backViewImg = backViewPath.split("/media/prageeth/Disk D/GitHub Projects/Easy-Car-Rental/Car-Rental-FontEnd/assets/savedImages/Cars/")[1];
    let backViewImgSrc = "assets/savedImages/Cars/" + backViewImg;

    let sideViewPath = car.sideView;
    let sideViewImg = sideViewPath.split("/media/prageeth/Disk D/GitHub Projects/Easy-Car-Rental/Car-Rental-FontEnd/assets/savedImages/Cars/")[1];
    let sideViewImgSrc = "assets/savedImages/Cars/" + sideViewImg;

    let interiorViewPath = car.internalView;
    let interiorViewImg = interiorViewPath.split("/media/prageeth/Disk D/GitHub Projects/Easy-Car-Rental/Car-Rental-FontEnd/assets/savedImages/Cars/")[1];
    let interiorViewImgSrc = "assets/savedImages/Cars/" + interiorViewImg;

    let fvImg = `<img src=${FrontViewImgSrc} alt="NIC Front" style="background-size: cover;width: 100%;height: 100%">`;
    $('#divCarFrontView').append(fvImg);

    let bvImg = `<img src=${backViewImgSrc} alt="NIC Front" style="background-size: cover;width: 100%;height: 100%">`;
    $('#divCarBackView').append(bvImg);

    let svImg = `<img src=${sideViewImgSrc} alt="NIC Front" style="background-size: cover;width: 100%;height: 100%">`;
    $('#divCarSideView').append(svImg);

    let ivImg = `<img src=${interiorViewImgSrc} alt="NIC Front" style="background-size: cover;width: 100%;height: 100%">`;
    $('#divCarInteriorView').append(ivImg);
}

function clearRentalFields() {
    $('#divCarFrontView').empty();
    $('#divCarBackView').empty();
    $('#divCarSideView').empty();
    $('#divCarInteriorView').empty();

    $('#txtCarBrand').val("");
    $('#txtCarColor').val("");
    $('#txtCarFuel').val("");
    $('#txtCarTransmission').val("");
    $('#txtCarNoOfPassengers').val("");
    $('#txtCarDailyRate').val("");
    $('#txtCarMonthlyRate').val("");
    $('#txtCarFreeKmForPrice').val("");
    $('#txtCarFreeKmForDuration').val("");
    $('#txtCarLossDamageWavier').val("");
    $('#txtCarPriceForExtraKm').val("");
    $('#txtCarCompleteKm').val("");
}

function generateRentId() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_BackEnd_war/api/v1/CarRent/generateRentId",
        method: "GET",
        success: function (res) {
            $('#txtCarRentId').val(res.data);
        }
    })
}

$('#needDriver').click(function () {
    if ($(this).is(":checked")) {
        searchRandomDriverForRent();
    } else {
        clearRentalDriverFields();
    }
})

function searchRandomDriverForRent() {
    $.ajax({
        url: baseUrl + "api/v1/driver/getRandomDriver",
        method: "GET",
        success: function (res) {
            for (let driver of res.data) {
                $('#txtDriverLicenceNo').val(driver.licenceNo);
                $('#txtDriverName').val(driver.name);
                $('#txtDriverAddress').val(driver.address);
                $('#txtDriverContactNo').val(driver.contactNo);
                $('#txtDriverNIC').val(driver.nicNo);
            }
        },
        error: function (ob) {
            swal({
                title: "Error!",
                text: "Drivers are not available in this time.Please try again shortly",
                icon: "error",
                button: "Close",
                timer: 2000
            });
        }
    })
}

function clearRentalDriverFields() {
    $('#txtDriverLicenceNo').val("");
    $('#txtDriverName').val("");
    $('#txtDriverAddress').val("");
    $('#txtDriverContactNo').val("");
    $('#txtDriverNIC').val("");
}

function generatePaymentId() {
    $.ajax({
        url: "http://localhost:8080/Car_Rental_BackEnd_war/api/v1/payment/generatePaymentId",
        method: "GET",
        success: function (res) {
            $('#txtPaymentId').val(res.data);
        }
    })
}

$('#txtPaymentAmount').on('keyup', function (event) {
    checkAdvancedAmount();
})

function checkAdvancedAmount() {
    let amount = $('#txtPaymentAmount').val();
    if (regAmount.test(amount)) {
        $('#txtPaymentAmount').css('border', '2px solid green');
        return true;
    } else {
        $('#txtPaymentAmount').css('border', '2px solid red');
        return false;
    }
}

$('#sendRequest').click(function () {
    let regNo = $('#cmbRegistrationNo').find('option:selected').text();
    if (regNo != "" && regNo != "-Select Registration No-") {
        let custId = $('#txtCustId').val();
        searchCustomerById(custId);
    }
})

function searchCustomerById(customerId) {
    $.ajax({
        url: baseUrl + "api/v1/customer/" + customerId,
        method: "GET",
        success: function (res) {
            let customer = res.data;
            searchCarByRegNo(customer);
        }
    });
}

function searchCarByRegNo(customer) {
    let registrationNo = $('#cmbRegistrationNo').find('option:selected').text();
    $.ajax({
        url: baseUrl + "api/v1/car/" + registrationNo,
        method: "GET",
        success: function (res) {
            let car = res.data;
            searchDriverByLicenceNo(customer, car);
        }
    })
}

function searchDriverByLicenceNo(customer, car) {
    let licenceNo = $('#txtDriverLicenceNo').val();
    $.ajax({
        url: baseUrl + "api/v1/driver/" + licenceNo,
        method: "GET",
        success: function (res) {
            let driver = res.data;
            addCarRent(customer, car, driver);
        }
    })
}

function addCarRent(customer, car, driver) {

    let rentId = $('#txtCarRentId').val();
    let today = $('#txtCarTodayDate').val();
    let pickupDate = $('#txtCarPickupDate').val();
    let returnDate = $('#txtCarReturnDate').val();
    let status = "Pending";

    var carRent = {
        rentId: rentId,
        date: today,
        pickUpDate: pickupDate,
        returnDate: returnDate,
        status: status,
        customer: customer,
        car: car,
        driver: driver
    }


    $.ajax({
        url:baseUrl + "api/v1/CarRent",
        method:"POST",
        contentType: "application/json",
        data: JSON.stringify(carRent),
        success:function (res) {
            console.log("Saved");
        }
    })
}
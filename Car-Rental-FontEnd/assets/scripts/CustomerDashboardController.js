generateRentId();
getLastLoginUser();

let baseUrl = "http://localhost:8080/Car_Rental_BackEnd_war/";
let today = new Date().toISOString().slice(0, 10);
$('#txtCarTodayDate').val(today);

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
        error:function (ob) {
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

function clearRentalDriverFields(){
    $('#txtDriverLicenceNo').val("");
    $('#txtDriverName').val("");
    $('#txtDriverAddress').val("");
    $('#txtDriverContactNo').val("");
    $('#txtDriverNIC').val("");
}
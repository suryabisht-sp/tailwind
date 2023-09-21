"use client"
import React, { useEffect, useState } from 'react'

const CheckOut = () => {
	const [price, setPrice] = useState()
	const [selectedOption, setSelectedOption] = useState(null);
	const [calPrice, setCalPrice] = useState()
	const [plan, setPlan] = useState()
	const [discount, setDiscount] = useState()
	const [discountedPrice, setDiscountedPrice] = useState()
	const [isPasswordHidden, setIsPasswordHidden] = useState(true);
	const [expiry, setExpiry] = useState('');
	const [cardNumber, setCardNumber] = useState('');

	const handleExpiryChange = (e) => {
		const inputValue = e.target.value;

		// Validate input to allow only digits and '/'
		const cleanedInput = inputValue.replace(/[^0-9/]/g, '');

		// Apply the 'MM/YY' format
		if (/^\d{0,2}(\/\d{0,2})?$/.test(cleanedInput)) {
			setExpiry(cleanedInput.slice(0, 5));
		}
	};

	const handleCardNumberChange = (e) => {
		const inputValue = e.target.value;

		// Validate input to allow only digits
		const cleanedInput = inputValue.replace(/\D/g, '');

		// Limit to 16 digits
		if (cleanedInput.length <= 16) {
			setCardNumber(cleanedInput);
		}
	};

	const checkplan = (id) => {
		if (id === "0") {
			setPrice("10")
		} else if (id === "1") {
			setPrice("24")
		}
		else if (id === "2") {
			setPrice("35")
		}
	}

	useEffect(() => {
		const url = new URL(window.location.href);
		const planPrice = url.pathname.split("/")
		checkplan(planPrice[2])
		calculatePrice("Monthly")
	}, [price])


	const handleOptionChange = (option) => {
		setSelectedOption(option);
	};

	const calculatePrice = (val) => {
		const calculatedTax = (parseInt(price) * 18 / 100)

		if (val === "Monthly") {
			const finalPrice = calculatedTax + parseInt(price)
			setCalPrice(finalPrice)
		} else if (val === "Annually") {
			const annualprice = ((calculatedTax + parseInt(price)) * 12).toFixed(2)
			const dis = (annualprice * 20 / 100).toFixed(2)
			const finalPrice = (annualprice - (annualprice * 20 / 100)).toFixed(2)
			setDiscount(dis)
			setCalPrice(annualprice)
			setDiscountedPrice(finalPrice)
		}
	}
	const handleChange = (e) => {
		setPlan(e.target.value)
		setCalPrice()
		calculatePrice(e.target.value)
	}
	const togglePasswordVisibility = () => {
		setIsPasswordHidden(!isPasswordHidden);
	};
	return (
		<div className="flex items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-8">
			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
				<div className="lg:col-span-2">
					<h2 className="text-sm font-medium">Payment Method</h2>
					<div className="bg-white rounded mt-4 shadow-lg">
						<div className="flex items-center px-8 py-5">
							<input
								type="checkbox"
								checked={selectedOption === 'PayPal'}
								onChange={() => handleOptionChange('PayPal')}
							/>
							<label className="text-sm font-medium ml-4">PayPal</label>
						</div>
						<div className="border-t">
							<div className="flex items-center px-8 py-5">
								<input
									type="checkbox"
									checked={selectedOption === 'Credit Card'}
									onChange={() => handleOptionChange('Credit Card')}
								/>
								<label className="text-sm font-medium ml-4">Credit Card</label>
							</div>
							<div className="grid grid-cols-2 gap-4 px-8 pb-8">
								<div className="col-span-2">
									<label className="text-xs font-semibold" htmlFor="cardNumber">Card number</label>
									<input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
										id="cardNumber"
										type="text"
										value={cardNumber}
										onChange={handleCardNumberChange}
										placeholder="0000 0000 0000 0000"
										maxLength={16} />
								</div>
								<div className="">
									<label className="text-xs font-semibold" htmlFor="cardNumber">Expiry Date</label>
									<input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" id="expiry"
										type="text"
										value={expiry}
										onChange={handleExpiryChange}
										placeholder="MM/YY" />
								</div>
								<div>
									<label className="text-xs font-semibold" htmlFor="cardNumber">CVC/CVV</label>
									<div className='flex relative'>
										<input autoComplete="off" maxLength={3} className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type={isPasswordHidden ? "password" : "text"} placeholder="..." />
										<button className='absolute left-2/3 -ml-1 sm:ml-0 md:ml-0 mt-3 lg:ml-2 2xl:ml-4' onClick={togglePasswordVisibility}>
											{isPasswordHidden ? "Show" : "Hide"}
										</button></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h2 className="text-sm font-medium">Purchase Summary</h2>
					<div className="bg-white rounded mt-4 shadow-lg py-6">
						<div className="px-8">
							<div className="flex items-end">
								<select className="text-sm font-medium focus:outline-none -ml-1" name="" id="" onChange={(e) => {
									handleChange(e)
								}}>
									<option value={"Monthly"}>Product (Billed Monthly)</option>
									<option value={"Annually"}>Product (Billed Annually)</option>
								</select>
								<span className="text-sm ml-auto font-semibold">${price}</span>
								<span className="text-xs text-gray-500 mb-px">/mo</span>
							</div>
							<span className="text-xs text-gray-500 mt-2">Save 20% with annual billing</span>
						</div>
						<div className="px-8 mt-4">
							<div className="flex items-end justify-between">
								<span className="text-sm font-semibold">Tax</span>
								<span className="text-sm text-gray-500 mb-px">18%</span>
							</div>
						</div>
						<div className="px-8 mt-4 border-t pt-4">
							<div className="flex items-end justify-between">
								<span className="font-semibold">Today you pay</span>
								<span className="font-semibold">$ {calPrice}</span>
							</div>
							{plan === "Annually" &&
								<div className="flex items-end justify-between">
									<span className="text-xs text-gray-500 mt-2">Discount</span>
									<span className="font-semibold">- $ {discount}</span>
								</div>}
							{plan === "Annually" && <div className="flex items-end justify-between">
								<span className="font-semibold">After Discount you pay</span>
								<span className="font-semibold">$ {discountedPrice}</span>
							</div>}
						</div>
						<div className="flex items-center px-8 mt-8">
							<input id="termsConditions" type="checkbox" />
							<label className="text-xs text-gray-500 ml-2" htmlFor="termsConditions">I agree to the terms and conditions.</label>
						</div>
						<div className="flex flex-col px-8 pt-4">
							<button className="flex items-center justify-center bg-blue-600 text-sm font-medium w-full h-10 rounded text-blue-50 hover:bg-blue-700">Start Subscription</button>
							<button className="text-xs text-blue-500 mt-3 underline">Have a coupon code?</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CheckOut
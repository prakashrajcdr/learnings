package com.prakash.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class Customer {

	@NotNull(message = "should not be null")
	private Integer id;
	private String name;
	private String email;
//	@Min(value = 2, message = "should be greater than 2")
	@Size(min = 2, max = 9, message = "2 to 9")
	private String mobile;
}

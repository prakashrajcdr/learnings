package com.prakash.controller;

import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prakash.dto.ChatRequest;
import com.prakash.dto.ChatResponse;

@RestController
@RequestMapping("/api")
public class OpenAIController {

	
	private OpenAiChatModel chatModel;
	
	public OpenAIController(OpenAiChatModel chatModel) {
		this.chatModel = chatModel;
	}
	
	@PostMapping("/openai")
	public ResponseEntity<ChatResponse> getMethodName(@RequestBody ChatRequest request) {
		String message = chatModel.call(request.getContent());
		ChatResponse response = new ChatResponse(message);
		return ResponseEntity.ok(response);
	}
	
}

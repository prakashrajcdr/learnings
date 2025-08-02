package com.prakash.leetcode;

public class LongestCommonPrefix_14 {

	public static void main(String[] args) {
		
		LongestCommonPrefix_14 obj = new LongestCommonPrefix_14();
		
		String[] strs = {"flower", "flow", "flight"};
		
		System.out.println("LongestCommonPrefix_14 Resutl - " + obj.longestCommonPrefix(strs));
		System.out.println("LongestCommonPrefix_14 Resutl - " + ("flow".indexOf("flower")));

	}
	
	public String longestCommonPrefix(String[] strs) {
        
		StringBuilder sb = new StringBuilder("");
		
		for(int i =0; i < strs[0].length(); i++ ) {
			
			char preChar = strs[0].charAt(i);
			for(int j=1; j < strs.length; j++) {
				
				if(i > strs[j].length()-1 || preChar != strs[j].charAt(i)) 
					return sb.toString();
			}
			sb.append(preChar);
		}
		
		return sb.toString();
   	}
	
    public String longestCommonPrefixChatGpt(String[] strs) {
        if (strs == null || strs.length == 0) {
            return "";
        }

        // Start with the first string as the initial prefix
        String prefix = strs[0];

        for (int i = 1; i < strs.length; i++) {
            // Reduce the prefix until it matches the current string
            while (strs[i].indexOf(prefix) != 0) {
                prefix = prefix.substring(0, prefix.length() - 1);
                if (prefix.isEmpty()) {
                    return "";
                }
            }
        }

        return prefix;
    }


}

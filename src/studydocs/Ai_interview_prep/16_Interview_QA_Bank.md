# 16. Interview Q&A Bank

## How to Use This Document
Cover the answer column (or scroll slowly) and answer out loud before revealing it. Organized by topic to match Docs 01–15. This is your final-review, self-testing document — use it in the last few days before an interview.

---

## Section A — AI/ML/DL Foundations

**Q1. What's the difference between AI, ML, and Deep Learning?**
AI is the broad goal of building systems that act intelligently. ML is a subset of AI where systems learn from data instead of explicit rules. Deep Learning is a subset of ML using multi-layered neural networks to learn complex, hierarchical patterns automatically.

**Q2. Name the major types of Machine Learning.**
Supervised (learns from labeled data), Unsupervised (finds structure in unlabeled data), Semi-supervised (mix of both), Reinforcement Learning (learns via reward/penalty), and Self-Supervised Learning (generates its own training signal from raw data — how LLMs are pretrained).

**Q3. Is a spam filter supervised or unsupervised learning?**
Supervised — it's trained on emails explicitly labeled "spam" or "not spam."

**Q4. What pretraining objective do most LLMs use, and what learning paradigm does it fall under?**
Causal (next-token) language modeling — predicting the next token given previous tokens. It's self-supervised learning, since labels (the actual next word) come from the raw text itself, requiring no human annotation.

---

## Section B — Math & Statistics

**Q5. What does the softmax function do?**
Converts a vector of raw scores (logits) into a probability distribution — values between 0 and 1 that sum to 1 — used e.g. to represent the model's probability over the next possible token.

**Q6. Why is cosine similarity preferred over Euclidean distance for comparing text embeddings?**
Cosine similarity measures the angle (direction) between vectors, ignoring magnitude, which better reflects semantic similarity regardless of factors like text length that can affect vector magnitude.

**Q7. In one sentence, what does backpropagation do?**
It uses the chain rule to efficiently compute how much each weight in a network contributed to the total loss, enabling gradient descent to update all weights, layer by layer, from output back to input.

**Q8. What's the role of the learning rate in training?**
It controls the step size taken when updating weights during gradient descent — too high risks overshooting/instability, too low risks painfully slow or stuck training.

---

## Section C — NLP Fundamentals

**Q9. Why do modern LLMs use subword tokenization instead of word-level tokenization?**
Subword tokenization (BPE, WordPiece) keeps vocabulary size manageable while still handling rare or unseen words by breaking them into familiar smaller pieces — word-level tokenization would require an unbounded vocabulary and fail on new/misspelled words.

**Q10. What's the key limitation of Word2Vec/GloVe embeddings that Transformer-based embeddings solve?**
Word2Vec/GloVe assign a single, fixed embedding per word regardless of context ("bank" always has the same vector). Transformer-based contextual embeddings produce different vectors for the same word depending on surrounding context.

**Q11. Why were RNNs largely replaced by Transformers for NLP tasks?**
RNNs process tokens sequentially (slow, hard to parallelize) and suffer from vanishing gradients that cause them to lose long-range context. Transformers process all tokens in parallel via self-attention, connecting any two positions directly regardless of distance.

---

## Section D — Neural Networks & Deep Learning

**Q12. Why are non-linear activation functions necessary in neural networks?**
Without them, stacking multiple linear layers mathematically collapses into a single linear transformation — non-linear activations are what let deep networks model complex, non-linear relationships.

**Q13. What is overfitting, and name three ways to prevent it.**
Overfitting is when a model memorizes training data patterns/noise instead of learning generalizable rules, performing well on training data but poorly on new data. Prevention: dropout, weight decay/regularization, early stopping, data augmentation, or simply more/better training data.

**Q14. What's the difference between an epoch and a batch?**
An epoch is one full pass through the entire training dataset. A batch is a subset of examples processed together before one weight update — many batches make up an epoch.

---

## Section E — Transformer Architecture

**Q15. Explain self-attention in one sentence.**
It lets every token in a sequence directly compare itself against every other token to decide how much to "attend to" each one when building its own context-aware representation.

**Q16. What are Query, Key, and Value vectors?**
Query represents what the current token is "looking for," Key represents what each token "offers," and Value is the actual content passed along when a token is attended to — attention weights come from comparing Query against Keys, applied to Values.

**Q17. Why is positional encoding needed?**
Self-attention has no inherent notion of token order — without positional information, attention would treat a sentence as an unordered "bag" of tokens, unable to distinguish "dog bites man" from "man bites dog."

**Q18. What's the difference between encoder-only, decoder-only, and encoder-decoder Transformers?**
Encoder-only (e.g., BERT) processes input bidirectionally, best for classification/embeddings. Decoder-only (e.g., GPT, Claude, Llama) uses causal/masked attention, generating text left-to-right — this is what most modern chat LLMs are. Encoder-decoder (e.g., T5) combines both, well-suited to sequence-to-sequence tasks like translation.

**Q19. What is multi-head attention, and why use multiple heads instead of one?**
Running several attention computations in parallel, each potentially specializing in different types of relationships (grammar, coreference, topical relevance). Multiple smaller specialized heads collectively capture richer relationships than one larger undifferentiated attention computation.

**Q20. What is a causal mask and why does GPT need one?**
It prevents a token from attending to future tokens — essential both during training (so the model can't "cheat" by seeing the answer it's predicting) and during generation (future tokens don't exist yet).

---

## Section F — LLM Training & Scaling

**Q21. Describe the three main stages of building a modern chat-focused LLM.**
(1) Pretraining on massive raw text using next-token prediction (self-supervised); (2) Supervised Fine-Tuning (SFT) on curated instruction/response pairs to teach instruction-following; (3) Alignment via RLHF or DPO using human preference data to refine helpfulness/safety/quality.

**Q22. What's the difference between RLHF and DPO?**
RLHF trains a separate reward model on human preference rankings, then uses reinforcement learning (typically PPO) to optimize the LLM against it. DPO skips the separate reward model and RL loop, directly optimizing the LLM on preference pairs with a simpler, more stable loss — generally cheaper and easier to train.

**Q23. What does temperature = 0 do during generation?**
Makes generation deterministic — the model always selects the single highest-probability next token (equivalent to greedy decoding) instead of sampling.

**Q24. What's the difference between top-k and top-p (nucleus) sampling?**
Top-k restricts sampling to a fixed number of the most likely tokens. Top-p restricts sampling to the smallest set of tokens whose cumulative probability exceeds a threshold p — dynamically adjusting how many tokens are considered based on the shape of the distribution.

**Q25. What is a Mixture-of-Experts (MoE) architecture and why is it used?**
Instead of every token passing through the entire network, an MoE model routes each token to only a few specialized "expert" sub-networks, allowing a very large total parameter count while keeping the active compute per token much lower — improving efficiency.

---

## Section G — Prompt Engineering

**Q26. What's the difference between zero-shot and few-shot prompting?**
Zero-shot gives only an instruction, relying on the model's pretrained knowledge. Few-shot includes example input-output pairs in the prompt, leveraging in-context learning to demonstrate the desired pattern/format.

**Q27. Why does Chain-of-Thought prompting improve performance on reasoning tasks?**
It encourages the model to generate intermediate reasoning steps rather than jumping to a final answer, effectively allocating more computation to the problem and catching errors that a single-leap answer would miss.

**Q28. What is prompt injection, and name two mitigations.**
An attack where malicious instructions embedded in untrusted input (documents, user messages) attempt to override intended system behavior. Mitigations: clearly separate trusted instructions from untrusted data, restrict tool/agent permissions (least privilege), validate outputs, require human confirmation for sensitive actions.

**Q29. Where should non-negotiable behavioral rules go in a prompt, and why?**
In the system prompt — it's given the highest instruction priority by the model and is kept separate from potentially untrusted user/retrieved content, forming a key defense layer against prompt injection.

---

## Section H — Embeddings & Vector Databases

**Q30. What's the difference between an embedding model and a vector database?**
An embedding model converts data (text, etc.) into a numerical vector representing its meaning. A vector database stores those vectors and efficiently searches them for similarity — they're complementary components of a system, not substitutes.

**Q31. Why use Approximate Nearest Neighbor (ANN) search instead of exact search?**
Exact search compares a query against every stored vector — too slow at scale (millions+ vectors). ANN algorithms (like HNSW) trade a small, usually negligible accuracy loss for dramatic speed improvements.

**Q32. What is hybrid search?**
Combining keyword-based search (e.g., BM25) with vector/semantic search and merging results — used when queries need to match both exact terms (codes, names) and paraphrased/conceptual meaning.

---

## Section I — RAG

**Q33. What two core problems does RAG solve that fine-tuning alone doesn't?**
Providing access to information the model was never trained on (private/current data) and reducing hallucination by grounding answers in verifiable retrieved sources.

**Q34. Walk through the RAG pipeline end-to-end.**
Ingestion: documents are chunked, embedded, and stored in a vector database with metadata. Runtime: the user query is embedded, similar chunks are retrieved (often via hybrid search), optionally re-ranked for precision, inserted into a grounded prompt alongside the query, and the LLM generates a response — ideally with citations back to source chunks.

**Q35. Why add a re-ranking step after initial retrieval?**
Initial vector retrieval is optimized for speed over large corpora and can be noisy; a re-ranker (often a more precise cross-encoder) re-scores a smaller candidate set for much higher relevance precision before passing the final top results to the LLM.

**Q36. What is parent-child (small-to-big) chunking, and why use it?**
Embedding small, precise chunks for accurate retrieval matching, but returning the larger "parent" section/chunk as context for generation — balancing retrieval precision with sufficient context for the LLM to generate a complete answer.

**Q37. How do you evaluate whether a RAG answer is hallucinating?**
Check faithfulness/groundedness — whether every claim in the generated answer traces back to the retrieved context — typically via an LLM-as-judge comparing the answer against retrieved chunks, or frameworks like RAGAS.

**Q38. What's agentic RAG, and when would you use it over standard RAG?**
An approach where an agent decides what/whether to retrieve and can iterate — retrieve, assess sufficiency, retrieve again if needed. Used for complex, multi-hop questions where a single retrieval pass likely won't gather everything needed.

---

## Section J — Fine-Tuning & PEFT

**Q39. When would you choose fine-tuning over RAG?**
When the goal is changing model behavior, style, format-following, or domain-specific reasoning patterns consistently — not injecting facts that change frequently over time, which RAG handles better and more cheaply.

**Q40. What is LoRA and why is it popular?**
Low-Rank Adaptation freezes the pretrained model's original weights and trains only small, additional low-rank matrices that approximate necessary weight updates — dramatically cutting training cost/memory versus full fine-tuning, reducing catastrophic forgetting risk, and producing small, swappable adapter files.

**Q41. What's the difference between LoRA and QLoRA?**
QLoRA adds quantization — the frozen base model is loaded in low precision (e.g., 4-bit) to drastically cut memory usage, while LoRA adapters still train normally — enabling fine-tuning of very large models on far more limited hardware.

**Q42. What is catastrophic forgetting?**
When fine-tuning on a narrow task causes a model to lose previously-held general capabilities — mitigated by using PEFT (LoRA) instead of full fine-tuning, mixing in general-purpose data, using conservative learning rates, and evaluating on general benchmarks post-training.

**Q43. Can fine-tuning and RAG be combined?**
Yes, and it's common in production — fine-tune for consistent style/tone/domain reasoning, use RAG to supply current, verifiable factual context — they solve different problems and complement each other.

---

## Section K — AI Agents

**Q44. What's the core loop behind most AI agents?**
The ReAct loop: Reason (Thought) about what's needed, Act by calling a tool, Observe the result, and repeat until enough information is gathered to give a final answer.

**Q45. Does the LLM directly execute tool/API calls?**
No — the LLM only outputs a structured request naming a function/tool and arguments. The surrounding application code is responsible for actually executing that call safely and returning the result as an observation.

**Q46. When would you use a multi-agent system instead of a single agent?**
When a task has genuinely distinct sub-tasks benefiting from specialized prompts/roles (research, analysis, writing, review), and the added latency/cost/complexity of coordinated LLM calls is justified by improved reliability over one overloaded agent.

**Q47. What's the biggest security risk unique to agents (vs. simple chatbots)?**
Agents take real-world actions via tools, so a successful prompt injection or reasoning error can cause real harm (unauthorized actions, data leaks), not just a bad text response — mitigated via least-privilege tool scoping, human confirmation for high-stakes actions, and treating all external content as untrusted.

**Q48. What problem does the Model Context Protocol (MCP) solve?**
It standardizes how AI applications connect to external tools/data sources, avoiding custom point-to-point integrations between every app and every tool.

---

## Section L — Evaluation, Safety & Guardrails

**Q49. Why is BLEU/ROUGE insufficient for evaluating a modern chatbot?**
These metrics measure surface-level n-gram overlap with a reference text; open-ended generation can be excellent while using entirely different wording, or have high overlap while being wrong — they don't capture semantic correctness or helpfulness.

**Q50. What is LLM-as-judge, and what's a key limitation?**
Using a capable LLM to score/compare model outputs against a rubric at scale. Key limitations: judge bias (e.g., favoring longer/more confident responses) and position bias in pairwise comparisons — requiring periodic calibration against genuine human judgment.

**Q51. Can hallucination be fully eliminated?**
No — it's inherent to how autoregressive models generate plausible text without built-in fact-verification. It can be significantly reduced (RAG, lower temperature, abstention instructions, citations) but not fully eliminated with current architectures.

**Q52. What's the difference between input and output guardrails?**
Input guardrails screen what goes into the model (PII, injection attempts, policy violations) before generation. Output guardrails screen what comes out (toxicity, factual claims, schema validity, PII leaks) before it reaches the user or triggers an action.

**Q53. What is red-teaming?**
Deliberately and systematically attempting to break a system (jailbreaks, injection, edge cases, harmful requests) before deployment or real attackers do, so vulnerabilities can be fixed proactively.

**Q54. Name three standard LLM benchmarks and what each measures.**
MMLU (broad multitask knowledge), HumanEval (functional code-generation correctness), TruthfulQA (avoidance of common misconceptions/falsehoods) — others include HellaSwag (commonsense reasoning) and GSM8K (multi-step math reasoning).

---

## Section M — LLMOps

**Q55. What's the biggest structural difference between MLOps and LLMOps?**
Traditional MLOps centers on training/versioning your own models on your own data. LLMOps typically centers on consuming pretrained foundation models and managing prompts, retrieval pipelines, and inference-time behavior/cost as primary artifacts, since training from scratch is rare.

**Q56. What is KV caching and why is it essentially mandatory in production?**
It stores Key/Value vectors computed for previous tokens during generation so they aren't redundantly recomputed at every new token step — without it, inference would be far slower and more expensive as sequences grow.

**Q57. What's the difference between quantization and distillation?**
Quantization reduces the numerical precision of an existing model's weights (e.g., 16-bit to 4-bit) to shrink memory/compute with a small accuracy trade-off. Distillation trains a separate, genuinely smaller model to mimic a larger "teacher" model's behavior.

**Q58. How would you reduce cost in a high-volume GenAI app without broadly hurting quality?**
Model routing (send simple queries to cheaper models), response/semantic caching for repeated queries, prompt caching for large static context, and tightening retrieval to fewer/more relevant chunks — before resorting to a blanket downgrade to a weaker model everywhere.

**Q59. Why is a "golden evaluation dataset" important?**
It provides a consistent, versioned benchmark of representative queries to automatically test every prompt/model/RAG change against, catching quality regressions before they reach production.

---

## Section N — Responsible AI

**Q60. How does bias enter an LLM-based system?**
Primarily through biased or unrepresentative training/fine-tuning data, and through evaluation blind spots where testing only covers "typical" cases — caught via deliberate bias-focused evaluation, red-teaming across demographic variation, and diverse data review.

**Q61. What determines how much human oversight an AI system needs?**
The severity and reversibility of potential harm from an error — high-stakes, irreversible, or individually-impactful actions require mandatory human review regardless of how confident the system seems.

**Q62. Can you fully explain why an LLM produced a specific output?**
Not in a complete mechanistic sense — LLMs are largely black-box internally. Practical transparency instead comes from grounded citations, logged inputs/outputs, and documented evaluation results.

---

## Section O — System Design / Scenario Questions (Open-Ended)

Use the framework from Doc 14 for all of these: clarify requirements → define success → choose approach → design architecture → address data → address quality/safety → address scale/cost → discuss trade-offs.

**Q63.** Design a RAG-based internal knowledge assistant for a 50,000-employee company. *(See Doc 14, Case Study 1 for a full walkthrough.)*

**Q64.** Design an AI coding assistant aware of a company's internal codebase and standards. *(See Doc 14, Case Study 2.)*

**Q65.** Design an autonomous customer-support agent that can issue refunds up to a limit. *(See Doc 14, Case Study 3.)*

**Q66.** How would you reduce hallucination in a legal-document summarization tool where accuracy is critical?
*Strong answer shape:* Ground every summary in RAG-retrieved source clauses, require the model to cite the exact source passage for each claim, use low temperature, add an output guardrail/verification pass comparing generated claims against source text, and route low-confidence summaries to human legal review rather than auto-publishing.

**Q67.** A stakeholder asks you to fine-tune a model so it "knows" your constantly-changing product catalog. How do you respond?
*Strong answer shape:* Push back constructively — fine-tuning is the wrong tool for fast-changing factual knowledge since it would require continuous retraining; recommend RAG instead, and reserve fine-tuning for genuinely needed behavior/style/format changes, potentially combined with RAG.

**Q68.** Your RAG chatbot's responses have gotten slower and more expensive as usage scaled 1000x. Diagnose and fix.
*Strong answer shape:* See Doc 13, Section 7 — check caching (KV, prompt, semantic), continuous batching, model routing by query complexity, and retrieval tightening (fewer, higher-precision chunks) before considering a blanket model downgrade.

**Q69.** How would you design the safety/evaluation plan for a symptom-checker health chatbot before launch?
*Strong answer shape:* See Doc 12, Section 9 — groundedness evaluation against vetted medical sources, emergency-language input guardrails with immediate escalation, output guardrails against definitive-diagnosis language, bias evaluation across demographics, red-teaming, human clinician review for high-risk conversations, continuous post-launch monitoring.

**Q70.** Would you use a single large "do everything" agent or a multi-agent system for a complex research-and-report-writing task, and why?
*Strong answer shape:* Lean multi-agent given genuinely distinct sub-tasks (research, analysis, writing, review) that benefit from specialized, focused prompts — explicitly acknowledge the trade-off of added latency/cost/coordination complexity, and justify it by the reliability gain for a task this complex.

---

## Section P — Rapid-Fire "Explain Like I'm Interviewing You" Round

Answer each in under 30 seconds, out loud, before moving on.

71. What is a token? *(A chunk of text — word, subword, or character — that a language model processes as a single unit.)*
72. What is an embedding? *(A dense numerical vector representing the meaning of a piece of text/data, positioned so similar meanings are close together in vector space.)*
73. What is context window? *(The maximum number of input+output tokens a model can process in a single request.)*
74. What is grounding? *(Constraining/basing a model's output on specific provided source material, typically via RAG, rather than relying purely on parametric memory.)*
75. What is a system prompt? *(A high-priority instruction set defining a model's persistent behavior/persona for a conversation, separate from user input.)*
76. What is function/tool calling? *(A model capability to output a structured request to invoke an external function/API rather than answering purely from its own knowledge.)*
77. What is a reward model? *(A model trained to predict human preference scores for outputs, used to guide RLHF training.)*
78. What is latency vs. throughput? *(Latency = time for one request to complete; throughput = total requests/tokens processed per unit time across many requests — optimizations can trade one for the other.)*
79. What is a knowledge cutoff? *(The date after which a pretrained model has no training data, and therefore no inherent knowledge of subsequent events, without external retrieval.)*
80. What is grounded generation vs. parametric knowledge? *(Grounded generation answers using explicitly provided context/sources; parametric knowledge is whatever the model "remembers" from pretraining alone, with no way to verify or update it dynamically.)*

---

**You've completed the full curriculum.** Go back to [`00_Roadmap_and_Study_Plan.md`](./00_Roadmap_and_Study_Plan.md) and re-do the mermaid-diagram-redraw exercise from memory — that's the real final exam.

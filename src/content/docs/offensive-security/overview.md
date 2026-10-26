---
title: "Offensive Security"
description: "Introduction to Offensive Security chapter"
lastUpdated: 2026-02-26T09:31:52.992Z
---
![offsec_logo.png](/images/16-offsec_logo.png)
> Cyber Security is a relentless and invisible war - the only way to counter tomorrow’s attack is to launch one against yourself today. ~Bezimek
{.is-info}


Offensive Security is about thinking and acting like a real attacker. The goal is simple: break things in a controlled way to see what actually holds up and what doesn’t. Instead of waiting for an incident, you proactively look for weak spots in systems, configurations, processes and even human behavior.

This helps organizations understand where they’re exposed, how effective their defenses really are and whether their people can identify and react to threats.

The mind map below reflects how really OffSec works. Techniques might overlap, some steps need to be repeated and exploitation path change mid-operation. Attacks are not straightforward, they are often opportunistic, messy and overwhelming - so this structure expresses its nature.

![offsec_tree.png](/images/12-offsec_tree.png)

## [Tactics](/offensive-security/tactics/)
Inspired by [MITRE ATT&CK](https://attack.mitre.org/) and [CyberKillChain](https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html) this section will introduce you into how attacks are structured and what tools, techniques and payloads you can make use of at each stage. We identify following tactics:

### Tabset {.tabset}

#### **Reconnaissance**
Both passive and active. Learn everything you can about the target before escalating to more intrusive techniques.
The better the recon, the cleaner the operation.

#### **Gather Intel**
Regardless of your access level (external, user or administrative) continuously collect and analyze data about the environment.
Footprinting, enumeration, fuzzing, data scraping; every detail can expose new attack paths.

#### **Exploitation**
Form hypotheses based on collected intelligence and execute with precision.
Deploy your toolkit to gain an initial foothold or achieve a defined objective (e.g., data exfiltration, service disruption).

#### **Privilege Escalation**
Expand control by exploiting misconfigurations, vulnerabilities or trust relationships.
Transition from limited access to root, SYSTEM or domain-level authority.

#### **Evasion**
Move subtly and stealthy, live off the land.
Minimize indicators of compromise, bypass defensive controls, and reduce telemetry footprints, especially in monitored environments.

#### **Lateral Movement**
With initial access secured, pivot across the environment. Target additional systems, escalate operational impact and repeat the cycle to extend situational awareness.

#### **Persistence**
Exploitation grants access while persistence secures it. Establish stable, stealhy, and encrypted communication channels that survive reboots, credential changes, and basic remediation efforts.

## [Domains](/offensive-security/domains/)
Each technology stack is a unique ecosystem with its own weird logic and proprietary protocols. You need to understand how these environments work to discover the logic flaws that automated scanners might omit.

### Tabset {.tabset}

#### **Web Apps**
Web applications are available to any user with internet access and browser. They handle a lot of data and business logic, which makes them a high-value target impacting millions of users.

#### **Network**
Any remote traffic between devices has to travel across a network before it reaches its destination. Understanding how that routing works is essential if you want to discover hidden hosts, find internal services and pivot deeper into the environment.

#### **Hardware**
Hardware security covers the actual physical machines and the access controls protecting them. With the right gear like RFID cloners or debug cables, you can bypass all the software defenses just by walking up and plugging in.

#### **AI**
AI systems take messy, unstructured inputs and use models to automate tasks or spit out answers. Since they literally parse natural language, you can often talk them into leaking private data or running commands they were never supposed to touch.

#### **Social Engineering**
The weakest link in any system is: **human**. It is the fastest way to get initial access because it is way easier to trick someone into handing over their password than to breach their defenses.

#### **Reverse Engineering**
Reverse engineering is the art of ripping apart and tinkering with compiled software, firmware or proprietary protocols to see what makes them tick. You do this to find hardcoded secrets, hidden admin features and logic flaws that would be hard to spot otherwise.

#### **Microservices**
Microservices split one giant application into dozens of small pieces constantly talking to each other over internal APIs (e.g. K8s). This uncovers new attack surface, letting you abuse weak service to service authentication and internally routed requests that assume everyone on the inside is trusted.

#### **Cryptography**
Cryptography uses complex math to keep data confidential and integrity intact. Nobody really bothers breaking the math itself, you just look for sloppy key storage, terrible randomness and implementation mistakes that completely defeat the purpose of the encryption.

#### **Mobile Apps**
Mobile applications live right on the user device but rely heavily on backend APIs to do anything useful. You can pull hardcoded tokens, dump insecure local storage and bypass client side checks that the server blindly trusts.

#### **Operating Systems**
Operating systems are the brain of all the hardware resources, processes and permissions on any given machine. You have to obtain the root/SYSTEM user level if you ever want to escalate your privileges, dump credentials from memory and set up persistence that survives a reboot.

#### **Cloud**
Cloud environments pack all the infrastructure management, networking and identity into centralized API consoles. One single misconfigured IAM role or leaked access key is usually all it takes to grab full admin control over entire environments across multiple regions.

## [Resources](/offensive-security/resources/)
Resources are our help in executing any of techniques and procedures mentioned in sections above. They can include:

- **Repositories** - Tools, scripts, interesting projects.
- **Payloads** - Binaries, ready-to-run codes, modules.
- **Wordlists** - Collections of field-proved wordlists.
- **Frameworks** - Playbooks/diagrams on executing particular scenarios.
- **Documentations** - Full guides for tools, technologies, protocols and mechanisms .
- **Methodologies** - Various perspectives on how to approach particular challenges/activities.
- **Training** - Training platforms allowing you to excel your offensive skills.
- **Wikis/Blogs** - All kinds of blogs/forums/wikis that might be an additional resource of knowledge.
{.grid-list}

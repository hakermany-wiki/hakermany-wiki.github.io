---
title: "Offensive Security resources"
description: "Offensive Security resources — Hakermany wiki"
lastUpdated: 2026-03-05T16:16:39.962Z
---
This section provides access to useful resources with a simple design in mind. Its structure will stay flat, so there is no need to navigate through multiple nested pages. If a topic is particularly extensive and manually maintained, please create a separate page for it (e.g. **PHP Injections**) and list all related payloads there.

## Wikis, Blogs & Documentations
Solid sources of knowledge about offensive security, techniques, and more.

- [**0xBEN blog** *Write ups, methodologies, techniques, walkthroughs*](https://benheater.com/)
- [**0xdf hacks stuff** *HTB write ups, cheatsheets and posts*](https://0xdf.gitlab.io/)
- [**Black Hills InfoSec** *Tools, posts with various techniques*](https://www.blackhillsinfosec.com/free-cybersecurity-tools/)
- [**Hacking Articles** *Posts with various hacks, POCs and write ups*](https://www.hackingarticles.in/)
- [**Hacktricks** *Techniques, payloads, cheatsheets*](https://book.hacktricks.wiki/en/index.html)
- [**M4lwhere Hacking Notes** *Techniques, payloads*](https://notes.m4lwhere.org/)
- [**Paged Out** *One article - one page magazine with programming tricks, hacking etc.*](https://pagedout.institute/)
- [**Pentest Monkey** *Posts with various attacks and hacks*](https://pentestmonkey.net/)
- [**Red Team Notes** *Techniques, payloads, cheatsheets*](https://www.ired.team/)
- [**SpecterOPS** *Tools and posts from team responsible for BloodHound*](https://specterops.io/resources/)
- [**The Hacker Recipes** *Techniques, payloads*](https://www.thehacker.recipes/)
{.links-list}

## Intel, Databases & Repositories
References, datasets, and curated lists for recon, vuln research and payload resources.

- [**Awesome list of awesome lists** *#Security section contains various useful stuff*](https://github.com/sindresorhus/awesome?tab=readme-ov-file#security)
- [**Chaos - The Internet Database** *Bug bounties with discovered subdomains*](https://chaos.projectdiscovery.io/#/)
- [**Exploit Database** *Vulns, Exploits, PoCs*](https://www.exploit-db.com/)
- [**Rapid7 DB** *Vulns, metasploit exploits*](https://www.rapid7.com/db/)
- [**SecLists** *Security testing wordlists and resources*](https://github.com/danielmiessler/SecLists)
- [**Shodan** *Search engine for internet accessible devices*](https://www.shodan.io/dashboard)
- [**swisskyrepo** *Repositories for projects like PayloadsAllTheThings, InternalAllTheThings etc.*](https://github.com/swisskyrepo)
{.links-list}

## Tools
Offensive tooling organized by use case. Single-purpose tools stay in their relevant subcategory, broader collections and automation go into Misc.

### Recon and Discovery
Tooling for mapping attack surface, discovering assets and automating reconnaissance workflows.

- [**BBOT** *Multipurpose scanner built to automate recon, bug bounties and ASM*](https://github.com/blacklanternsecurity/bbot)
{.links-list}

### Web Fuzzing
Fast content discovery tools for directories, endpoints, vhosts and parameters.

- [**ffuf** *Go-based fuzzer/enumeration tool for discovering web content, vhosts and parameters*](https://github.com/ffuf/ffuf)
- [**GoBuster** *Go-based fuzzer/enumeration tool for discovering web content*](https://github.com/OJ/gobuster)
{.links-list}

### Wordlists and Wordlist Generators
Inputs for bruteforce, content discovery and credential attacks.

- [**CeWL** *Custom Word List generator*](https://github.com/digininja/CeWL)
- [**CrackStation** *Wordlists and cracking*](https://crackstation.net/crackstation-wordlist-password-cracking-dictionary.htm)
- [**DefaultCreds** *Default credentials for various services*](https://github.com/ihebski/DefaultCreds-cheat-sheet)
{.links-list}

### Cracking and Data Analysis
Tools for password recovery and quick manipulation of encoded, encrypted or mangled data.

- [**CyberChef** *Cyber Swiss Army Knife web app for encoding, decoding and data analysis*](https://gchq.github.io/CyberChef/)
- [**hashcat** *Advanced password recovery tool*](https://hashcat.net/wiki/doku.php?id=example_hashes)
{.links-list}

### Windows, AD and Protocol Abuse
Tools and references for attacking Windows environments, Active Directory and network protocols.

- [**gentilkiwi repos** *Repositories for projects like mimikatz, kekeo and more*](https://github.com/gentilkiwi)
- [**HarmJ0y** *Repositories for projects like PowerView, Rubeus and more*](https://github.com/HarmJ0y)
- [**impacket** *Collection of Python classes to work with network protocols*](https://github.com/fortra/impacket)
- [**Inveigh** *Tool for sniffing and spoofing packets for various protocols with focus on Windows*](https://github.com/Kevin-Robertson/Inveigh)
- [**LOLBAS** *Live-off-the-land binaries for Windows*](https://lolbas-project.github.io/#)
- [**WADComs** *Offensive tools cheatsheet against Windows*](https://wadcoms.github.io/)
{.links-list}

### Priv Esc
Scanners and references for identifying and abusing privilege escalation vectors.

- [**GTFOBins** *List of Unix-like execs and how they can lead to priv esc*](https://gtfobins.org/)
- [**PEASS-ng** *Privilege escalation scanners*](https://github.com/peass-ng/PEASS-ng)
{.links-list}

### Reverse Engineering
Frameworks for static and dynamic analysis of binaries and firmware.

- [**Ghidra** *Software Reverse Engineering framework*](https://github.com/NationalSecurityAgency/ghidra)
{.links-list}

### Hardware and RF
Resources for physical adjacent attacks and RF tooling ecosystems.

- [**Awesome Flipper Zero** *List of useful Flipper Zero repositories*](https://github.com/djsime1/awesome-flipperzero)
{.links-list}

### Misc and Automation
Broader tool collections and security automations.

- [**Reverse Shell Generator** *Quick Reverse Shell payloads generator*](https://www.revshells.com/)
- [**RedTeam Tools** *Collection of tools useful in red teaming*](https://github.com/A-poc/RedTeam-Tools)
- [**secureCodeBox** *Kubernetes-based modular toolchain for continuous, automated security scans*](https://www.securecodebox.io/docs/getting-started/installation/)
- [**zsh-aliases** *Various aliases to work faster during CTFs*](https://github.com/jazzpizazz/zsh-aliases/tree/main)
{.links-list}

## Training
Hands-on learning resources split between interactive platforms and deliberately vulnerable targets.

### Platforms
Online platforms with structured challenges, learning paths and guided exercises.

- [**Caldera** *Scalable, Automated Adversary Emulation Platform*](https://caldera.mitre.org/)
- [**DynamiteLab** *Large collection of PCAP files to analyze and learn from*](https://dynamitelab.com/)
- [**HackTheBox** *Labs offer simulated environments (boxes) to hack and challenges, while Academy offers various learning paths to many security areas*](https://www.hackthebox.com/)
- [**OverTheWire** *Various challenges to learn bash, web apps and more*](https://overthewire.org/wargames/)
- [**PentesterLab** *Security Platform for learning particular techniques*](https://pentesterlab.com)
- [**PortSwigger Academy** *Web security challenges with heavy focus on using Burp Suite*](https://portswigger.net/web-security)
- [**Root Me** *Platform for training hacking skills*](https://www.root-me.org/)
- [**TryHackMe** *Security learning platform dividing challenges into rooms*](https://tryhackme.com/)
- [**UnderTheWire** *Powershell based challenges*](https://underthewire.tech/wargames/century/1)
{.links-list}

### Vulnerable Machines and Dummies
Deliberately broken apps, VMs and cluster deployments to practice exploitation in a safe environment.
- [**DVWA** *Damn Vulnerable Web App, another vulnerable web app for testing*](https://github.com/digininja/DVWA)
- [**EKS Cluster Games** *Challenges with intentionally flawed EKS cluster*](https://eksclustergames.com/)
- [**Kubernetes Goat** *Deliberately vulnerable K8s deployment for education*](https://madhuakula.com/kubernetes-goat/)
- [**Metasploitable2** *Vulnerable version of Ubuntu Linux*](https://docs.rapid7.com/metasploit/metasploitable-2-exploitability-guide/)
- [**Metasploitable3** *VM full of security vulnerabilities meant for exploits testing*](https://github.com/rapid7/metasploitable3)
- [**OWASP Juice Shop** *Sophisticated insecure web application*](https://owasp.org/www-project-juice-shop/)
{.links-list}

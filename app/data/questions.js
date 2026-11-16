// Cisco NetAcad CCNA 2 v7.0 (SRWE) Final Exam Questions (1-89)
const EXAM_QUESTIONS = [
  {
    "id": 1,
    "number": 1,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. What will router R1 do with a packet that has a destination IPv6 address of 2001:db8:cafe:5::1?",
    "image": "images/page_3_img_1.png",
    "options": [
      "forward the packet out GigabitEthernet0/0",
      "drop the packet",
      "forward the packet out GigabitEthernet0/1",
      "forward the packet out Serial0/0/0"
    ],
    "correct": [
      3
    ],
    "explanation": "Explanation: Topic 14.4.9 The route ::/0 is the compressed form of the 0000:0000:0000:0000:0000:0000:0000:0000/0 default route. The default route is used if a more specific route is not found in the routing table."
  },
  {
    "id": 2,
    "number": 2,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. Currently router R1 uses an EIGRP route learned from Branch2 to reach the 10.10.0.0/16 network. Which floating static route would create a backup route to the 10.10.0.0/16 network in the event that the link between R1 and Branch2 goes down?",
    "image": "images/page_4_img_1.png",
    "options": [
      "ip route 10.10.0.0 255.255.0.0 Serial 0/0/0 100",
      "ip route 10.10.0.0 255.255.0.0 209.165.200.226 100",
      "ip route 10.10.0.0 255.255.0.0 209.165.200.225 100",
      "ip route 10.10.0.0 255.255.0.0 209.165.200.225 50"
    ],
    "correct": [
      2
    ],
    "explanation": "Explanation: Topic 15.4.1 A floating static route needs to have an administrative distance that is greater than the administrative distance of the active route in the routing table. Router R1 is using an EIGRP route which has an administrative distance of 90 to reach the 10.10.0.0/16 network. To be a backup route the floating static route must have an administrative distance greater than 90 and have a next hop address corresponding to the serial interface IP address of Branch1."
  },
  {
    "id": 3,
    "number": 3,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. R1 was configured with the static route command ip route 209.165.200.224 255.255.255.224 S0/0/0 and consequently users on network 172.16.0.0/16 are unable to reach resources on the Internet. How should this static route be changed to allow user traffic from the LAN to reach the Internet?",
    "image": "images/page_5_img_1.jpeg",
    "options": [
      "Add an administrative distance of 254.",
      "Change the destination network and mask to 0.0.0.0 0.0.0.0",
      "Change the exit interface to S0/0/1.",
      "Add the next-hop neighbor address of 209.165.200.226."
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 15.3.1 The static route on R1 has been incorrectly configured with the wrong destination network and mask. The correct destination network and mask is 0.0.0.0 0.0.0.0."
  },
  {
    "id": 4,
    "number": 4,
    "type": "single",
    "required_selections": 1,
    "question": "Which option shows a correctly configured IPv4 default static route?",
    "image": null,
    "options": [
      "ip route 0.0.0.0 255.255.255.0 S0/0/0",
      "ip route 0.0.0.0 0.0.0.0 S0/0/0",
      "ip route 0.0.0.0 255.255.255.255 S0/0/0",
      "ip route 0.0.0.0 255.0.0.0 S0/0/0"
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 15.3.1 The static route ip route 0.0.0.0 0.0.0.0 S0/0/0 is considered a default static route and will match all destination networks."
  },
  {
    "id": 5,
    "number": 5,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. Which static route command can be entered on R1 to forward traffic to the LAN connected to R2?",
    "image": "images/page_6_img_1.png",
    "options": [
      "ipv6 route 2001:db8:12:10::/64 S0/0/0",
      "ipv6 route 2001:db8:12:10::/64 S0/0/1 fe80::2",
      "ipv6 route 2001:db8:12:10::/64 S0/0/0 fe80::2",
      "ipv6 route 2001:db8:12:10::/64 S0/0/1 2001:db8:12:10::1"
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 15.2.6 A fully specified static route must be used when the next hop is an IPv6 link-local address because link-local addresses are not contained in the IPv6 routing table and are only unique to a specific link, requiring the exit interface to be explicitly identified so the router knows which network segment the address belongs to."
  },
  {
    "id": 6,
    "number": 6,
    "type": "single",
    "required_selections": 1,
    "question": "What is a method to launch a VLAN hopping attack?",
    "image": null,
    "options": [
      "introducing a rogue switch and enabling trunking",
      "sending spoofed native VLAN information",
      "sending spoofed IP addresses from the attacking host",
      "flooding the switch with MAC addresses"
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 10.5.2 A VLAN hopping attack enables traffic from one VLAN to be seen by another without the aid of a router by configuring a host or rogue switch to spoof Dynamic Trunking Protocol (DTP) signaling, which exploits switch ports that have the automatic trunking feature enabled by default to establish an unauthorized trunk link and grant the attacker access to all VLANs on the switch."
  },
  {
    "id": 7,
    "number": 7,
    "type": "single",
    "required_selections": 1,
    "question": "A cybersecurity analyst is using the macof tool to evaluate configurations of switches deployed in the backbone network of an organization. Which type of LAN attack is the analyst targeting during this evaluation?",
    "image": null,
    "options": [
      "VLAN hopping",
      "DHCP spoofing",
      "MAC address table overflow",
      "VLAN double-tagging"
    ],
    "correct": [
      2
    ],
    "explanation": "Explanation: Topic 10.4.2 Macof is a network attack tool and is mainly used to flood LAN switches with MAC addresses."
  },
  {
    "id": 8,
    "number": 8,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. A network administrator is configuring a router as a DHCPv6 server. The administrator issues a show ipv6 dhcp pool command to verify the configuration. Which statement explains the reason that the number of active clients is 0?",
    "image": "images/page_7_img_1.jpeg",
    "options": [
      "The default gateway address is not provided in the pool.",
      "No clients have communicated with the DHCPv6 server yet.",
      "The IPv6 DHCP pool configuration has no IPv6 address range specified.",
      "The state is not maintained by the DHCPv6 server under stateless DHCPv6 operation."
    ],
    "correct": [
      3
    ],
    "explanation": "Explanation: Topic 8.3.2 Under the stateless DHCPv6 configuration, indicated by the command ipv6 nd other-config-flag, the DHCPv6 server does not maintain the state information, because client IPv6 addresses are not managed by the DHCP server. Because the clients will configure their IPv6 addresses by combining the prefix/prefix-length and a self-generated interface ID, the ipv6 dhcp pool configuration does not need to specify the valid IPv6 address range. And because clients will use the link-local address of the router interface as the default gateway address, the default gateway address is not necessary."
  },
  {
    "id": 9,
    "number": 9,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. A network administrator configured routers R1 and R2 as part of HSRP group 1. After the routers have been reloaded, a user on Host1 complained of lack of connectivity to the Internet The network administrator issued the show standby brief command on both routers to verify the HSRP operations. In addition, the administrator observed the ARP table on Host1. Which entry should be seen in the ARP table on Host1 in order to gain connectivity to the Internet?",
    "image": "images/page_9_img_1.png",
    "options": [
      "the virtual IP address and the virtual MAC address for the HSRP group 1",
      "the virtual IP address of the HSRP group 1 and the MAC address of R1",
      "the virtual IP address of the HSRP group 1 and the MAC address of R2",
      "the IP address and the MAC address of R1"
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 9.1.2 Hosts will send an ARP request to the default gateway which is the virtual IP address. ARP replies from the HSRP routers contain the virtual MAC address. The host ARP tables will contain a mapping of the virtual IP to the virtual MAC."
  },
  {
    "id": 10,
    "number": 10,
    "type": "matching",
    "question": "Match the forwarding characteristic to its type.",
    "image": "images/page_10_img_1.png",
    "pairs": [
      {
        "item": "appropriate for high performance computing applications",
        "target": "cut-through"
      },
      {
        "item": "forwarding process can begin after receiving the destination address",
        "target": "cut-through"
      },
      {
        "item": "may forward invalid frames",
        "target": "cut-through"
      },
      {
        "item": "error checking before forwarding",
        "target": "store-and-forward"
      },
      {
        "item": "forwarding process only begins after receiving the entire frame",
        "target": "store-and-forward"
      },
      {
        "item": "only forwards valid frames",
        "target": "store-and-forward"
      }
    ],
    "targets": [
      "cut-through",
      "store-and-forward"
    ],
    "explanation": "Topic 2.1.5\nCut-through frame forwarding begins the forwarding process after the destination MAC address is read, suitable for high-performance computing, but may forward invalid frames. Store-and-forward frame forwarding receives the entire frame and performs CRC error checking before forwarding, ensuring only valid frames are forwarded."
  },
  {
    "id": 11,
    "number": 11,
    "type": "single",
    "required_selections": 1,
    "question": "Which statement is correct about how a Layer 2 switch determines how to forward frames?",
    "image": null,
    "options": [
      "Frame forwarding decisions are based on MAC address and port mappings in the CAM table.",
      "Only frames with a broadcast destination address are forwarded out all active switch ports.",
      "Unicast frames are always forwarded regardless of the destination MAC address.",
      "Cut-through frame forwarding ensures that invalid frames are always dropped."
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 2.1.2 Cut-through frame forwarding reads up to only the first 22 bytes of a frame, which excludes the frame check sequence and thus invalid frames may be forwarded. In addition to broadcast frames, frames with a destination MAC address that is not in the CAM are also flooded out all active ports. Unicast frames are not always forwarded. Received frames with a destination MAC address that is associated with the switch port on which it is received are not forwarded because the destination exists on the network segment connected to that port."
  },
  {
    "id": 12,
    "number": 12,
    "type": "single",
    "required_selections": 1,
    "question": "Which statement describes a result after multiple Cisco LAN switches are interconnected?",
    "image": null,
    "options": [
      "The broadcast domain expands to all switches.",
      "One collision domain exists per switch.",
      "There is one broadcast domain and one collision domain per switch.",
      "Frame collisions increase on the segments connecting the switches.",
      "Unicast frames are always forwarded regardless of the destination MAC address."
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 2.2.2 In Cisco LAN switches, the microsegmentation makes it possible for each port to represent a separate segment and thus each switch port represents a separate collision domain. This fact will not change when multiple switches are interconnected. However, LAN switches do not filter broadcast frames. A broadcast frame is flooded to all ports. Interconnected switches form one big broadcast domain."
  },
  {
    "id": 13,
    "number": 13,
    "type": "matching",
    "question": "Match the link state to the interface and protocol status.",
    "image": "images/page_12_img_1.png",
    "pairs": [
      {
        "item": "Layer 1 problem",
        "target": "down/down"
      },
      {
        "item": "Layer 2 problem",
        "target": "up/down"
      },
      {
        "item": "disabled",
        "target": "administratively down"
      },
      {
        "item": "operational",
        "target": "up/up"
      }
    ],
    "targets": [
      "down/down",
      "up/down",
      "administratively down",
      "up/up"
    ],
    "explanation": "Topic 1.2.6\nLayer 1 problem corresponds to down/down. Layer 2 problem corresponds to up/down. Disabled corresponds to administratively down. Operational corresponds to up/up."
  },
  {
    "id": 14,
    "number": 14,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. How is a frame sent from PCA forwarded to PCC if the MAC address table on switch SW1 is empty?",
    "image": "images/page_13_img_1.png",
    "options": [
      "SW1 forwards the frame directly to SW2. SW2 floods the frame to all ports connected to SW2, excluding the port through which the frame entered the switch.",
      "SW1 floods the frame on all ports on the switch, excluding the interconnected port to switch SW2 and the port through which the frame entered the switch.",
      "SW1 floods the frame on all ports on SW1, excluding the port through which the frame entered the switch.",
      "SW1 drops the frame because it does not know the destination MAC address."
    ],
    "correct": [
      2
    ],
    "explanation": "Explanation: Topic 2.1.3 When a switch powers on, the MAC address table is empty. The switch builds the MAC address table by examining the source MAC address of incoming frames. The switch forwards based on the destination MAC address found in the frame header. If a switch has no entries in the MAC address table or if the destination MAC address is not in the switch table, the switch will forward the frame out all ports except the port that brought the frame into the switch."
  },
  {
    "id": 15,
    "number": 15,
    "type": "single",
    "required_selections": 1,
    "question": "An administrator is trying to remove configurations from a switch. After using the command erase startup- config and reloading the switch, the administrator finds that VLANs 10 and 100 still exist on the switch. Why were these VLANs not removed?",
    "image": null,
    "options": [
      "Because these VLANs are stored in a file that is called vlan.dat that is located in flash memory, this file must be manually deleted.",
      "These VLANs cannot be deleted unless the switch is in VTP client mode.",
      "These VLANs are default VLANs that cannot be removed.",
      "These VLANs can only be removed from the switch by using the no vlan 10 and no vlan 100 commands."
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 3.3.10 Standard range VLANs (1-1005) are stored in a file that is called vlan.dat that is located in flash memory. Erasing the startup configuration and reloading a switch does not automatically remove these VLANs. The vlan.dat file must be manually deleted from flash memory and then the switch must be reloaded."
  },
  {
    "id": 16,
    "number": 16,
    "type": "matching",
    "question": "Match the description to the correct VLAN type.",
    "image": "images/page_15_img_1.png",
    "pairs": [
      {
        "item": "Carries untagged traffic",
        "target": "Native VLAN"
      },
      {
        "item": "An IP address and subnet mask are assigned to this VLAN, allowing the switch to be accessed by HTTP, Telnet, SSH, or SNMP",
        "target": "Management VLAN"
      },
      {
        "item": "All switch ports are assigned to this VLAN after initial bootup of the switch",
        "target": "Default VLAN"
      },
      {
        "item": "Configured to carry user generated traffic",
        "target": "Data VLANs"
      }
    ],
    "targets": [
      "Native VLAN",
      "Management VLAN",
      "Default VLAN",
      "Data VLANs"
    ],
    "explanation": "Topic 3.1.3\nA data VLAN is configured to carry user-generated traffic. A default VLAN is the VLAN where all switch ports belong after the initial boot up of a switch loading the default configuration. A native VLAN is assigned to an 802.1Q trunk port, and untagged traffic is placed on it. A management VLAN is any VLAN that is configured to access the management capabilities of a switch."
  },
  {
    "id": 17,
    "number": 17,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. A network administrator has connected two switches together using EtherChannel technology. If STP is running, what will be the end result?",
    "image": "images/page_16_img_1.png",
    "options": [
      "STP will block one of the redundant links.",
      "The switches will load balance and utilize both EtherChannels to forward packets.",
      "The resulting loop will create a broadcast storm.",
      "Both port channels will shutdown."
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 6.1.3 Cisco switches support two protocols for negotiating a channel between two switches: LACP and PAgP. PAgP is Cisco- proprietary. In the topology shown, the switches are connected to each other using redundant links. By default, STP is enabled on switch devices. STP will block redundant links to prevent loops."
  },
  {
    "id": 18,
    "number": 18,
    "type": "single",
    "required_selections": 1,
    "question": "What is a secure configuration option for remote access to a network device?",
    "image": null,
    "options": [
      "Configure an ACL and apply it to the VTY lines.",
      "Configure 802.1x.",
      "Configure SSH.",
      "Configure Telnet."
    ],
    "correct": [
      2
    ],
    "explanation": "Explanation: Topic 1.3.2 Secure Shell (SSH) is a secure protocol that provides an encrypted management connection to a remote device by using strong encryption for both the authentication process and the data transmitted between devices, making it the secure replacement for Telnet which transmits information in insecure plaintext."
  },
  {
    "id": 19,
    "number": 19,
    "type": "single",
    "required_selections": 1,
    "question": "Which wireless encryption method is the most secure?",
    "image": null,
    "options": [
      "WPA2 with AES",
      "WPA2 with TKIP",
      "WEP",
      "WPA"
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 12.7.4 IEEE 802.11i and WPA2 both use the Advanced Encryption Standard (AES) for encryption. AES is currently considered the strongest encryption protocol. WPA2 does not use TKIP (Temporal Key Integrity Protocol). It is WPA that uses TKIP. Although WPA provides stronger encryption than WEP, it is is not as strong as WPA2 (AES)."
  },
  {
    "id": 20,
    "number": 20,
    "type": "single",
    "required_selections": 1,
    "question": "After attaching four PCs to the switch ports, configuring the SSID and setting authentication properties for a small office network, a technician successfully tests the connectivity of all PCs that are connected to the switch and WLAN. A firewall is then configured on the device prior to connecting it to the Internet. What type of network device includes all of the described features?",
    "image": null,
    "options": [
      "firewall appliance",
      "wireless router",
      "switch",
      "standalone wireless access point"
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 12.2.3 A wireless router is an integrated device that combines the functionality of a switch to interconnect wired PCs, an access point to provide wireless connectivity via a configured SSID, and a router to serve as a default gateway for internet access while also providing built-in firewall and security features to protect the local network."
  },
  {
    "id": 21,
    "number": 21,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. Host A has sent a packet to host B. What will be the source MAC and IP addresses on the packet when it arrives at host B?",
    "image": "images/page_18_img_1.jpeg",
    "options": [
      "Source MAC: 00E0.FE91.7799 Source IP: 10.1.1.10",
      "Source MAC: 00E0.FE10.17A3 Source IP: 10.1.1.10",
      "Source MAC: 00E0.FE10.17A3 Source IP: 192.168.1.1",
      "Source MAC: 00E0.FE91.7799 Source IP: 10.1.1.1",
      "Source MAC: 00E0.FE91.7799 Source IP: 192.168.1.1"
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 14.2.2 As a packet traverses the network, the Layer 2 addresses will change at every hop as the packet is de-encapsulated and re- encapsulated, but the Layer 3 addresses will remain the same."
  },
  {
    "id": 23,
    "number": 23,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. In addition to static routes directing traffic to networks 10.10.0.0/16 and 10.20.0.0/16, Router HQ is also configured with the following command: ip route 0.0.0.0 0.0.0.0 serial 0/1/1 What is the purpose of this command?",
    "image": "images/page_19_img_1.png",
    "options": [
      "Packets that are received from the Internet will be forwarded to one of the LANs connected to R1 or R2.",
      "Packets with a destination network that is not 10.10.0.0/16 or is not 10.20.0.0/16 or is not a directly connected network will be forwarded to the Internet.",
      "Packets from the 10.10.0.0/16 network will be forwarded to network 10.20.0.0/16, and packets from the 10.20.0.0/16 network will be forwarded to network 10.10.0.0/16.",
      "Packets that are destined for networks that are not in the routing table of HQ will be dropped."
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 15.3.1 The command ip route 0.0.0.0 0.0.0.0 serial 0/1/1 configures a default static route, also known as a quad-zero route, which serves as a gateway of last resort by matching all packets that do not have a more specific entry in the routing table, ensuring that traffic destined for unknown remote networks like the Internet is forwarded out the specified serial interface instead of being dropped."
  },
  {
    "id": 24,
    "number": 24,
    "type": "single",
    "required_selections": 1,
    "question": "What protocol or technology disables redundant paths to eliminate Layer 2 loops?",
    "image": null,
    "options": [
      "VTP",
      "STP",
      "EtherChannel",
      "DTP"
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 5.1.2 Spanning Tree Protocol (STP) is a loop-prevention network protocol specifically designed to eliminate Layer 2 loops in redundant switched networks by intentionally identifying and blocking redundant physical paths to ensure that only one logical path exists between any two devices at a time, while still maintaining the ability to automatically unblock those paths if an active link fails."
  },
  {
    "id": 25,
    "number": 25,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. Based on the exhibited configuration and output, why is VLAN 99 missing?",
    "image": "images/page_21_img_1.png",
    "options": [
      "because VLAN 99 is not a valid management VLAN",
      "because there is a cabling problem on VLAN 99",
      "because VLAN 1 is up and there can only be one management VLAN on the switch",
      "because VLAN 99 has not yet been created"
    ],
    "correct": [
      3
    ],
    "explanation": "Explanation: Topic 4.4.3 VLAN 99 is the management VLAN and must be added to the VLAN database before it will appear in the show vlan output. To do so, enter the following commands: Sw1(config)# vlan 99 Sw1(config-vlan)# name Management SW1(config-vlan)# exit"
  },
  {
    "id": 26,
    "number": 26,
    "type": "multiple",
    "required_selections": 2,
    "question": "Which two VTP modes allow for the creation, modification, and deletion of VLANs on the local switch? (Choose two.)",
    "image": null,
    "options": [
      "client",
      "master",
      "distribution",
      "slave",
      "server",
      "transparent"
    ],
    "correct": [
      4,
      5
    ],
    "explanation": "Explanation: Topic 3.3.1 The three VTP modes are server, client, and transparent. In server VTP mode, the switch can create, modify, and delete VLANs and send this information on to other switches that are in the same VTP domain. Switches in transparent VTP mode can do the same except that information is not transmitted to other switches."
  },
  {
    "id": 27,
    "number": 27,
    "type": "multiple",
    "required_selections": 3,
    "question": "Which three steps should be taken before moving a Cisco switch to a new VTP management domain? (Choose three.)",
    "image": null,
    "options": [
      "Configure the switch with the name of the new management domain.",
      "Reset the VTP counters to allow the switch to synchronize with the other switches in the domain.",
      "Configure the VTP server in the domain to recognize the BID of the new switch.",
      "Download the VTP database from the VTP server in the new domain.",
      "Select the correct VTP mode and version.",
      "Reboot the switch."
    ],
    "correct": [
      0,
      4,
      5
    ],
    "explanation": "Explanation: Topic 3.3.1 When adding a new switch to a VTP domain, it is critical to configure the switch with a new domain name, the correct VTP mode, VTP version number, and password. A switch with a higher revision number can propagate invalid VLANs and erase valid VLANs thus preventing connectivity for multiple devices on the valid VLANs."
  },
  {
    "id": 28,
    "number": 28,
    "type": "single",
    "required_selections": 1,
    "question": "A network administrator is preparing the implementation of Rapid PVST+ on a production network. How are the Rapid PVST+ link types determined on the switch interfaces?",
    "image": null,
    "options": [
      "Link types can only be configured on access ports configured with a single VLAN.",
      "Link types can only be determined if PortFast has been configured.",
      "Link types are determined automatically.",
      "Link types must be configured with specific port configuration commands."
    ],
    "correct": [
      2
    ],
    "explanation": "Explanation: Topic 5.3.2 When Rapid PVST+ is being implemented, link types are automatically determined but can be specified manually. Link types can be either point-to-point, shared, or edge."
  },
  {
    "id": 29,
    "number": 29,
    "type": "multiple",
    "required_selections": 3,
    "question": "Refer to the exhibit. All the displayed switches are Cisco 2960 switches with the same default priority and operating at the same bandwidth. Which three ports will be STP designated ports? (Choose three.)",
    "image": "images/page_23_img_1.png",
    "options": [
      "fa0/9",
      "fa0/13",
      "fa0/10",
      "fa0/20",
      "fa0/21",
      "fa0/11"
    ],
    "correct": [
      1,
      2,
      4
    ],
    "explanation": "Explanation: Topic 5.2.6 Given that all the switches have the same default priority and are operating at the same bandwidth, the switch with the lowest MAC address will become the root bridge. This would be SW3 and all its ports would be designated ports. SW1 has a lower MAC address than SW2 has and therefore port fa0/10 will become the designated port on that link."
  },
  {
    "id": 30,
    "number": 30,
    "type": "single",
    "required_selections": 1,
    "question": "How will a router handle static routing differently if Cisco Express Forwarding is disabled?",
    "image": null,
    "options": [
      "It will not perform recursive lookups.",
      "Ethernet multiaccess interfaces will require fully specified static routes to avoid routing inconsistencies.",
      "Static routes that use an exit interface will be unnecessary.",
      "Serial point-to-point interfaces will require fully specified static routes to avoid routing inconsistencies."
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 15.2.5 In most platforms running IOS 12.0 or later, Cisco Express Forwarding is enabled by default. Cisco Express Forwarding eliminates the need for the recursive lookup. If Cisco Express Forwarding is disabled, multiaccess network interfaces require fully specified static routes in order to avoid inconsistencies in their routing tables. Point-to-point interfaces do not have this problem, because multiple end points are not present. With or without Cisco Express Forwarding enabled, using an exit interface when configuring a static route is a viable option."
  },
  {
    "id": 31,
    "number": 31,
    "type": "multiple",
    "required_selections": 2,
    "question": "Compared with dynamic routes, what are two advantages of using static routes on a router? (Choose two.)",
    "image": null,
    "options": [
      "They improve network security.",
      "They take less time to converge when the network topology changes.",
      "They improve the efficiency of discovering neighboring networks.",
      "They use fewer router resources."
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Explanation: Topic 14.5.1 Static routes are manually configured on a router. Static routes are not automatically updated and must be manually reconfigured if the network topology changes. Thus static routing improves network security because it does not make route updates among neighboring routers. Static routes also improve resource efficiency by using less bandwidth, and no CPU cycles are used to calculate and communicate routes."
  },
  {
    "id": 32,
    "number": 32,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. Which route was configured as a static route to a specific network using the next-hop address?",
    "image": "images/page_25_img_1.png",
    "options": [
      "S 10.17.2.0/24 [1/0] via 10.16.2.2",
      "S 0.0.0.0/0 [1/0] via 10.16.2.2",
      "S 10.17.2.0/24 is directly connected, Serial 0/0/0",
      "C 10.16.2.0/24 is directly connected, Serial0/0/0"
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 15.2.1 The C in a routing table indicates an interface that is up and has an IP address assigned. The S in a routing table signifies that a route was installed using the ip route command. Two of the routing table entries shown are static routes to a specific destination (the 192.168.2.0 network). The entry that has the S denoting a static route and [1/0] was configured using the next- hop address. The other entry (S 192.168.2.0/24 is directly connected, Serial 0/0/0) is a static route configured using the exit interface. The entry with the 0.0.0.0 route is a default static route which is used to send packets to any destination network that is not specifically listed in the routing table."
  },
  {
    "id": 33,
    "number": 33,
    "type": "single",
    "required_selections": 1,
    "question": "What is the effect of entering the spanning-tree portfast configuration command on a switch?",
    "image": null,
    "options": [
      "It disables an unused port.",
      "It disables all trunk ports.",
      "It enables portfast on a specific switch interface.",
      "It checks the source L2 address in the Ethernet header against the sender L2 address in the ARP body."
    ],
    "correct": [
      2
    ],
    "explanation": "Explanation: Topic 11.5.2 The spanning-tree portfast interface configuration command is used to enable PortFast on a specific switch port, which allows the interface to bypass the standard Spanning Tree Protocol (STP) listening and learning states to transition immediately from a blocking state to a forwarding state. This feature is specifically designed for ports connected to end devices to minimize the time they must wait for STP to converge, thereby preventing issues such as DHCP timeouts during the initial connection process."
  },
  {
    "id": 34,
    "number": 34,
    "type": "single",
    "required_selections": 1,
    "question": "What is the IPv6 prefix that is used for link-local addresses?",
    "image": null,
    "options": [
      "FF01::/8",
      "2001::/3",
      "FC00::/7",
      "FE80::/10"
    ],
    "correct": [
      3
    ],
    "explanation": "Explanation: Topic 1.5.3 The IPv6 link-local prefix is FE80::/10 and is used to create a link-local IPv6 address on an interface."
  },
  {
    "id": 35,
    "number": 35,
    "type": "multiple",
    "required_selections": 2,
    "question": "Which two statements are characteristics of routed ports on a multilayer switch? (Choose two.)​",
    "image": null,
    "options": [
      "In a switched network, they are mostly configured between switches at the core and distribution layers.",
      "The interface vlan command has to be entered to create a VLAN on routed ports.",
      "They support subinterfaces, like interfaces on the Cisco IOS routers.",
      "They are used for point-to-multipoint links.",
      "They are not associated with a particular VLAN."
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Explanation: Topic 4.3.1 Routed ports are physical ports that act similarly to a router interface. They are not associated with a particular VLAN, they do not support subinterfaces, and they are used for point-to- point links. In a switched network, they are mostly configured between switches at the core and distribution layers. To configure routed ports, the no switchport interface command has to be used on the appropriate ports."
  },
  {
    "id": 36,
    "number": 36,
    "type": "single",
    "required_selections": 1,
    "question": "Successful inter-VLAN routing has been operating on a network with multiple VLANs across multiple switches for some time. When an inter-switch trunk link fails and Spanning Tree Protocol brings up a backup trunk link, it is reported that hosts on two VLANs can access some, but not all the network resources that could be accessed previously. Hosts on all other VLANS do not have this problem. What is the most likely cause of this problem?",
    "image": null,
    "options": [
      "The protected edge port function on the backup trunk interfaces has been disabled.",
      "The allowed VLANs on the backup link were not configured correctly.",
      "Dynamic Trunking Protocol on the link has failed.",
      "Inter-VLAN routing also failed when the trunk link failed."
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 4.4.1 When a backup trunk link is activated by STP and only specific VLANs experience connectivity issues while others remain functional, the most likely cause is that the backup interface's allowed VLAN list was not configured to include all the necessary VLAN IDs. Because trunks only propagate traffic for VLANs explicitly permitted in their configuration, an incomplete allowed list on the backup link will block traffic for the missing VLANs once the primary link fails, even if inter-VLAN routing is otherwise operational."
  },
  {
    "id": 37,
    "number": 37,
    "type": "single",
    "required_selections": 1,
    "question": "Which command will start the process to bundle two physical interfaces to create an EtherChannel group via LACP?",
    "image": null,
    "options": [
      "interface port-channel 2",
      "channel-group 1 mode desirable",
      "interface range GigabitEthernet 0/4 - 5",
      "channel-group 2 mode auto"
    ],
    "correct": [
      2
    ],
    "explanation": "Explanation: Topic 6.2.2 To specify the interfaces in an EtherChannel group, use the interface range interface global configuration command for the range of interfaces used. The interface range GigabitEthernet 0/4 – 5 command is the correct option because it specifies two interfaces for the EtherChannel group."
  },
  {
    "id": 38,
    "number": 38,
    "type": "single",
    "required_selections": 1,
    "question": "What action takes place when a frame entering a switch has a multicast destination MAC address?",
    "image": null,
    "options": [
      "The switch will forward the frame out all ports except the incoming port.",
      "The switch forwards the frame out of the specified port.",
      "The switch adds a MAC address table entry mapping for the destination MAC address and the ingress port.",
      "The switch replaces the old entry and uses the more current port."
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 2.1.3 If the destination MAC address is a broadcast or a multicast, the frame is also flooded out all ports except the incoming port."
  },
  {
    "id": 39,
    "number": 39,
    "type": "single",
    "required_selections": 1,
    "question": "A junior technician was adding a route to a LAN router. A traceroute to a device on the new network revealed a wrong path and unreachable status. What should be done or checked?",
    "image": null,
    "options": [
      "Verify that there is not a default route in any of the edge router routing tables.",
      "Check the configuration on the floating static route and adjust the AD.",
      "Create a floating static route to that network.",
      "Check the configuration of the exit interface on the new static route."
    ],
    "correct": [
      3
    ],
    "explanation": "Explanation: Topic 15.2.3 When a traceroute reveals a wrong path or unreachable status immediately after adding a static route, it typically indicates that the route was configured with an incorrect egress point; therefore, checking the exit interface is essential to ensure the router is forwarding packets toward the intended network segment rather than misdirecting them out a different physical or logical interface."
  },
  {
    "id": 40,
    "number": 40,
    "type": "multiple",
    "required_selections": 3,
    "question": "Select the three PAgP channel establishment modes. (Choose three.)",
    "image": null,
    "options": [
      "auto",
      "default",
      "passive",
      "desirable",
      "extended",
      "on"
    ],
    "correct": [
      0,
      3,
      5
    ],
    "explanation": "Explanation: Topic 6.1.6 Port Aggregation Protocol (PAgP) supports three channel establishment modes: on, which forces the interface to channel without exchanging PAgP packets; desirable, which places the interface in an active negotiating state to initiate negotiations with other interfaces; and auto, which puts the interface in a passive negotiating state where it responds to received PAgP packets but does not initiate negotiation."
  },
  {
    "id": 41,
    "number": 41,
    "type": "single",
    "required_selections": 1,
    "question": "A static route has been configured on a router. However, the destination network no longer exists. What should an administrator do to remove the static route from the routing table?",
    "image": null,
    "options": [
      "Remove the route using the no ip route command.",
      "Change the administrative distance for that route.",
      "Change the routing metric for that route.",
      "Nothing. The static route will go away on its own."
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 15.2 When the destination network specified in a static route does not exist anymore, the static route stays in the routing table until it is manually removed by using the no ip route command."
  },
  {
    "id": 42,
    "number": 42,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. What can be concluded about the configuration shown on R1?",
    "image": "images/page_31_img_1.png",
    "options": [
      "R1 is configured as a DHCPv4 relay agent.",
      "R1 is operating as a DHCPv4 server.",
      "R1 will broadcast DHCPv4 requests on behalf of local DHCPv4 clients.",
      "R1 will send a message to a local DHCPv4 client to contact a DHCPv4 server at 10.10.10.8."
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 7.2.8 The presence of the ip helper-address 10.10.10.8 command on the GigabitEthernet0/0 interface indicates that R1 is acting as a DHCPv4 relay agent, which allows the router to intercept local broadcast DHCPv4 discovery messages and forward them as unicast packets to a DHCPv4 server located on a different subnet."
  },
  {
    "id": 43,
    "number": 43,
    "type": "matching",
    "question": "Match the step to each switch boot sequence description.",
    "image": "images/page_32_img_1.jpeg",
    "pairs": [
      {
        "item": "execute POST",
        "target": "step 1"
      },
      {
        "item": "load the boot loader from ROM",
        "target": "step 2"
      },
      {
        "item": "perform low-level CPU initialization",
        "target": "step 3"
      },
      {
        "item": "flash file system initialization",
        "target": "step 4"
      },
      {
        "item": "load the IOS",
        "target": "step 5"
      },
      {
        "item": "transfer switch control to the IOS",
        "target": "step 6"
      }
    ],
    "targets": [
      "step 1",
      "step 2",
      "step 3",
      "step 4",
      "step 5",
      "step 6"
    ],
    "explanation": "Topic 1.1.1\nThe switch boot sequence steps are:\n1. execute POST\n2. load the boot loader from ROM\n3. CPU register initializations\n4. flash file system initialization\n5. load the IOS\n6. transfer switch control to the IOS"
  },
  {
    "id": 44,
    "number": 44,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. R1 has been configured as shown. However, PC1 is not able to receive an IPv4 address. What is the problem?​",
    "image": "images/page_33_img_1.png",
    "options": [
      "The ip helper-address command was applied on the wrong interface.",
      "R1 is not configured as a DHCPv4 server.",
      "A DHCP server must be installed on the same LAN as the host that is receiving the IP address.",
      "The ip address dhcp command was not issued on the interface Gi0/1."
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 7.2.8 The ip helper-address command has to be applied on interface Gi0/0. This command must be present on the interface of the LAN that contains the DHCPv4 client PC1 and must be directed to the correct DHCPv4 server."
  },
  {
    "id": 45,
    "number": 45,
    "type": "multiple",
    "required_selections": 2,
    "question": "What two default wireless router settings can affect network security? (Choose two.)",
    "image": "images/page_34_img_1.png",
    "options": [
      "The SSID is broadcast.",
      "MAC address filtering is enabled.",
      "WEP encryption is enabled.",
      "The wireless channel is automatically selected.",
      "A well-known administrator password is set."
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Explanation: Topic 13.1.3 Default settings on wireless routers often include broadcasting the SSID and using a well-known administrative password. Both of these pose a security risk to wireless networks. WEP encryption and MAC address filtering are not set by default. The automatic selection of the wireless channel poses no security risks."
  },
  {
    "id": 46,
    "number": 46,
    "type": "single",
    "required_selections": 1,
    "question": "What is the common term given to SNMP log messages that are generated by network devices and sent to the SNMP server?",
    "image": null,
    "options": [
      "traps",
      "acknowledgments",
      "auditing",
      "warnings"
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 13.3.2 Network devices being monitored by the SNMP protocol can be configured to generate log messages that are sent to an SNMP server. The log messages, also called traps, contain all type of information from simple status reports to complex urgent conditions that require immediate attention."
  },
  {
    "id": 47,
    "number": 47,
    "type": "single",
    "required_selections": 1,
    "question": "A network administrator is adding a new WLAN on a Cisco 3500 series WLC. Which tab should the administrator use to create a new VLAN interface to be used for the new WLAN?",
    "image": null,
    "options": [
      "WIRELESS",
      "MANAGEMENT",
      "CONTROLLER",
      "WLANs"
    ],
    "correct": [
      2
    ],
    "explanation": "Explanation: Topic 13.3.7 To create a new VLAN interface on a Cisco Wireless LAN Controller, the administrator must navigate to the CONTROLLER tab and select the Interfaces menu, as this is where software-based virtual interfaces are defined with specific VLAN IDs and IP addresses before they can be mapped to a WLAN profile."
  },
  {
    "id": 48,
    "number": 48,
    "type": "single",
    "required_selections": 1,
    "question": "A network administrator is configuring a WLAN. Why would the administrator change the default DHCP IPv4 addresses on an AP?",
    "image": null,
    "options": [
      "to restrict access to the WLAN by authorized, authenticated users only",
      "to monitor the operation of the wireless network",
      "to reduce outsiders intercepting data or accessing the wireless network by using a well- known address range",
      "to reduce the risk of interference by external devices such as microwave ovens"
    ],
    "correct": [
      2
    ],
    "explanation": "Explanation: Topic 13.1.3 Changing default DHCP IPv4 addresses is a fundamental security best practice because default IP ranges and management addresses for wireless routers are well-known and easily found on the internet, meaning that using a non-default range makes it more difficult for unauthorized outsiders to identify the network's structure or gain access to the device's management interface."
  },
  {
    "id": 49,
    "number": 49,
    "type": "multiple",
    "required_selections": 2,
    "question": "Which two functions are performed by a WLC when using split media access control (MAC)? (Choose two.)",
    "image": null,
    "options": [
      "packet acknowledgments and retransmissions",
      "frame queuing and packet prioritization",
      "beacons and probe responses",
      "frame translation to other protocols",
      "association and re-association of roaming clients"
    ],
    "correct": [
      3,
      4
    ],
    "explanation": "Explanation: Topic 12.4.3 Under the CAPWAP split MAC architecture, management and less time-sensitive tasks are shifted to the Wireless LAN Controller (WLC), which specifically performs association and re-association of roaming clients along with frame translation to other protocols, while the Access Point (AP) handles real-time MAC functions such as beacons, probe responses, and packet acknowledgments."
  },
  {
    "id": 50,
    "number": 50,
    "type": "single",
    "required_selections": 1,
    "question": "On what switch ports should BPDU guard be enabled to enhance STP stability?",
    "image": null,
    "options": [
      "all PortFast-enabled ports",
      "only ports that are elected as designated ports",
      "only ports that attach to a neighboring switch",
      "all trunk ports that are not root ports"
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 11.5.3 End-user ports should connect only to end-user devices and not to other switches. To prevent a switch from being added to the network on an end-user port, BPDU guard will immediately put the port into the error disabled state if a BPDU is received on that port. However, if PortFast is not configured on an end-user port, BPDU guard is not activated on that port."
  },
  {
    "id": 51,
    "number": 51,
    "type": "single",
    "required_selections": 1,
    "question": "Which network attack is mitigated by enabling BPDU guard?",
    "image": null,
    "options": [
      "rogue switches on a network",
      "CAM table overflow attacks",
      "MAC address spoofing",
      "rogue DHCP servers on a network"
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 10.5.9 There are several recommended STP stability mechanisms to help mitigate STP manipulation attacks: PortFast – used to immediately bring an interface configured as an access or trunk port to the forwarding state from a blocking state. Applied to all end-user ports. BPDU guard – immediately error-disables a port that receives a BPDU. Applied to all end-user ports.The receipt of BPDUs may be part of an unauthorized attempt to add a switch to the network. Root guard – prevents a switch from becoming the root switch. Applied to all ports where the root switch should not be located. Loop guard – detects unidirectional links to prevent alternate or root ports from becoming designated ports. Applied to all ports that are or can become nondesignated."
  },
  {
    "id": 52,
    "number": 52,
    "type": "single",
    "required_selections": 1,
    "question": "Why is DHCP snooping required when using the Dynamic ARP Inspection feature?",
    "image": null,
    "options": [
      "It relies on the settings of trusted and untrusted ports set by DHCP snooping.",
      "It uses the MAC address table to verify the default gateway IP address.",
      "It redirects ARP requests to the DHCP server for verification.",
      "It uses the MAC-address-to-IP-address binding database to validate an ARP packet."
    ],
    "correct": [
      3
    ],
    "explanation": "Explanation: Topic 11.4.1 DAI relies on DHCP snooping. DHCP snooping listens to DHCP message exchanges and builds a bindings database of valid tuples (MAC address, IP address, VLAN interface). When DAI is enabled, the switch drops ARP packet if the sender MAC address and sender IP address do not match an entry in the DHCP snooping bindings database. However, it can be overcome through static mappings. Static mappings are useful when hosts configure static IP addresses, DHCP snooping cannot be run, or other switches in the network do not run dynamic ARP inspection. A static mapping associates an IP address to a MAC address on a VLAN."
  },
  {
    "id": 53,
    "number": 53,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. Router R1 has an OSPF neighbor relationship with the ISP router over the 192.168.0.32 network. The 192.168.0.36 network link should serve as a backup when the OSPF link goes down. The floating static route command ip route 0.0.0.0 0.0.0.0 S0/0/1 100 was issued on R1 and now traffic is using the backup link even when the OSPF link is up and functioning. Which change should be made to the static route command so that traffic will only use the OSPF link when it is up?​",
    "image": "images/page_38_img_1.png",
    "options": [
      "Change the administrative distance to 120.",
      "Add the next hop neighbor address of 192.168.0.36.",
      "Change the destination network to 192.168.0.34.",
      "Change the administrative distance to 1."
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 15.4.1 The problem with the current floating static route is that the administrative distance is set too low. The administrative distance will need to be higher than that of OSPF, which is 110, so that the router will only use the OSPF link when it is up."
  },
  {
    "id": 54,
    "number": 54,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. What is the metric to forward a data packet with the IPv6 destination address 2001:DB8:ACAD:E:240:BFF:FED4:9DD2?",
    "image": "images/page_39_img_1.png",
    "options": [
      "90",
      "128",
      "2170112",
      "2681856",
      "2682112",
      "3193856"
    ],
    "correct": [
      4
    ],
    "explanation": "Explanation: Topic 14.4.3 The IPv6 destination address 2001:DB8:ACAD:E:240:BFF:FED4:9DD2 belongs to the network of 2001:DB8:ACAD:E::/64. In the routing table, the route to forward the packet has Serial 0/0/1 as an exit interface and 2682112 as the cost."
  },
  {
    "id": 55,
    "number": 55,
    "type": "multiple",
    "required_selections": 3,
    "question": "A network administrator is configuring a new Cisco switch for remote management access. Which three items must be configured on the switch for the task? (Choose three.)",
    "image": null,
    "options": [
      "IP address",
      "VTP domain",
      "vty lines",
      "default VLAN",
      "default gateway",
      "loopback address"
    ],
    "correct": [
      0,
      2,
      4
    ],
    "explanation": "Explanation: Topic 1.1.5 To enable the remote management access, the Cisco switch must be configured with an IP address and a default gateway. In addition, vty lines must configured to enable either Telnet or SSH connections. A loopback address, default VLAN, and VTP domain configurations are not necessary for the purpose of remote switch management."
  },
  {
    "id": 56,
    "number": 56,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. Which statement shown in the output allows router R1 to respond to stateless DHCPv6 requests?",
    "image": "images/page_41_img_1.png",
    "options": [
      "ipv6 nd other-config-flag",
      "prefix-delegation 2001:DB8:8::/48 00030001000E84244E70",
      "ipv6 dhcp server LAN1",
      "ipv6 unicast-routing",
      "dns-server 2001:DB8:8::8"
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 8.3.3 The interface command ipv6 nd other-config-flag allows RA messages to be sent on this interface, indicating that additional information is available from a stateless DHCPv6 server."
  },
  {
    "id": 57,
    "number": 57,
    "type": "multiple",
    "required_selections": 2,
    "question": "Refer to the exhibit. A Layer 3 switch routes for three VLANs and connects to a router for Internet connectivity. Which two configurations would be applied to the switch? (Choose two.)",
    "image": "images/page_42_img_1.png",
    "options": [
      "(config)# interface gigabitethernet1/1 (config-if)# switchport mode trunk",
      "(config)# interface gigabitethernet 1/1 (config-if)# no switchport (config-if)# ip address 192.168.1.2 255.255.255.252",
      "(config)# interface vlan 1 (config-if)# ip address 192.168.1.2 255.255.255.0 (config-if)# no shutdown",
      "(config)# ip routing",
      "(config)# interface fastethernet0/4 (config-if)# switchport mode trunk"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Explanation: Topic 4.3.7 The no switchport command allows a switch port to be assigned an IP address. The port is a routed port at that point. The ip routing command enables routing for a switch. Use the interface vlan x command on the switch to configure routing for any VLAN that is attached to the switch, including the management VLAN. No management VLAN is shown in this scenario, but the commands interface vlan 5 and interface vlan 6, along with an appropriate IP address and subnet mask for each VLAN, would be used on the switch in the exhibit. There is no need to add an IP address or use the no shutdown command on VLAN 1 because VLAN 1 is not used in this design and because VLAN 1 is “up and up” by default."
  },
  {
    "id": 58,
    "number": 58,
    "type": "multiple",
    "required_selections": 2,
    "question": "A technician is troubleshooting a slow WLAN and decides to use the split-the-traffic approach. Which two parameters would have to be configured to do this? (Choose two.)",
    "image": null,
    "options": [
      "Configure the 5 GHz band for streaming multimedia and time sensitive traffic.",
      "Configure the security mode to WPA Personal TKIP/AES for one network and WPA2 Personal AES for the other network",
      "Configure the 2.4 GHz band for basic internet traffic that is not time sensitive.",
      "Configure the security mode to WPA Personal TKIP/AES for both networks.",
      "Configure a common SSID for both split networks."
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "Explanation: Topic 13.4.3 The \"split-the-traffic\" approach optimizes wireless performance by using the 2.4 GHz and 5 GHz bands as two separate networks to manage data flow more effectively. In this configuration, the 5 GHz band is dedicated to high- bandwidth, time-sensitive traffic like streaming multimedia because it is less crowded and has more interference-free channels, while the 2.4 GHz band is used for basic, non- time-sensitive tasks such as web browsing and email."
  },
  {
    "id": 59,
    "number": 59,
    "type": "single",
    "required_selections": 1,
    "question": "A company has just switched to a new ISP. The ISP has completed and checked the connection from its site to the company. However, employees at the company are not able to access the internet. What should be done or checked?",
    "image": null,
    "options": [
      "Verify that the static route to the server is present in the routing table.",
      "Check the configuration on the floating static route and adjust the AD.",
      "Ensure that the old default route has been removed from the company edge routers.",
      "Create a floating static route to that network."
    ],
    "correct": [
      2
    ],
    "explanation": "Explanation: Topic 15.3 When switching to a new ISP, a new default static route (0.0.0.0/0) must be configured to point to the new provider's gateway; however, if the old default route remains in the routing table, the router may continue to misdirect internet- bound traffic toward the inactive link of the previous provider. Removing the obsolete route ensures that the router correctly uses the new path as the gateway of last resort for all traffic destined for the internet."
  },
  {
    "id": 60,
    "number": 60,
    "type": "single",
    "required_selections": 1,
    "question": "Which information does a switch use to populate the MAC address table?",
    "image": null,
    "options": [
      "the destination MAC address and the incoming port",
      "the destination MAC address and the outgoing port",
      "the source and destination MAC addresses and the incoming port",
      "the source and destination MAC addresses and the outgoing port",
      "the source MAC address and the incoming port",
      "the source MAC address and the outgoing port"
    ],
    "correct": [
      4
    ],
    "explanation": "Explanation: Topic 2.1.3 To maintain the MAC address table, the switch uses the source MAC address of the incoming packets and the port that the packets enter. The destination address is used to select the outgoing port."
  },
  {
    "id": 61,
    "number": 61,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. A network administrator is reviewing the configuration of switch S1. Which protocol has been implemented to group multiple physical ports into one logical link?",
    "image": "images/page_45_img_1.png",
    "options": [
      "PAgP",
      "DTP",
      "LACP",
      "STP"
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 6.1.6 The EtherChannel protocol PAgP provides the grouping of physical interfaces and utilizes the modes of auto and desirable. The EtherChannel protocol LACP provides the grouping of physical interfaces and utilizes the modes of passive and active. DTP and STP are not utilized to group multiple physical interfaces into a single logical link."
  },
  {
    "id": 62,
    "number": 62,
    "type": "single",
    "required_selections": 1,
    "question": "Which type of static route is configured with a greater administrative distance to provide a backup route to a route learned from a dynamic routing protocol?",
    "image": null,
    "options": [
      "floating static route",
      "default static route",
      "summary static route",
      "standard static route"
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 15.4.1 There are four basic types of static routes. Floating static routes are backup routes that are placed into the routing table if a primary route is lost. A summary static route aggregates several routes into one, reducing the of the routing table. Standard static routes are manually entered routes into the routing table. Default static routes create a gateway of last resort."
  },
  {
    "id": 63,
    "number": 63,
    "type": "single",
    "required_selections": 1,
    "question": "What action takes place when a frame entering a switch has a unicast destination MAC address appearing in the MAC address table?",
    "image": null,
    "options": [
      "The switch updates the refresh timer for the entry.",
      "The switch forwards the frame out of the specified port.",
      "The switch purges the entire MAC address table.",
      "The switch replaces the old entry and uses the more current port."
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 2.1.3 During the forwarding stage of switch operation, if the destination MAC address is a unicast address found in the MAC address table, the switch uses the existing entry to direct the frame exclusively out of the associated egress port rather than flooding it. In contrast, actions such as updating refresh timers or replacing entries occur during the learning stage when examining the source MAC address."
  },
  {
    "id": 64,
    "number": 64,
    "type": "single",
    "required_selections": 1,
    "question": "The exhibit shows two PCs called PC A and PC B, two routes called R1 and R2, and two switches. PC A has the address 172.16.1.1/24 and is connected to a switch and into an interface on R1 that has the IP address 172.16.1.254. PC B has the address 172.16.2.1/24 and is connected to a switch that is connected to another interface on R1 with the IP address 172.16.2.254. The serial interface on R1 has the address 172.16.3.1 and is connected to the serial interface on R2 that has the address 172.16.3.2/24. R2 is connected to the internet cloud. Which command will create a static route on R2 in order to reach PC B?",
    "image": "images/page_47_img_1.jpeg",
    "options": [
      "R2(config)# ip route 172.16.2.1 255.255.255.0 172.16.3.1",
      "R2(config)# ip route 172.16.2.0 255.255.255.0 172.16.2.254",
      "R2(config)# ip route 172.16.2.0 255.255.255.0 172.16.3.1",
      "R2(config)# ip route 172.16.3.0 255.255.255.0 172.16.2.254"
    ],
    "correct": [
      2
    ],
    "explanation": "Explanation: Topic 15.2.1 The correct syntax is: router(config)# ip route destination-network destination-mask {next-hop-ip-address | exit-interface} If the local exit interface instead of the next-hop IP address is used then the route will be displayed as a directly connected route instead of a static route in the routing table. Because the network to be reached is 172.16.2.0 and the next-hop IP address is 172.16.3.1, the command is R2(config)# ip route 172.16.2.0 255.255.255.0 172.16.3.1"
  },
  {
    "id": 65,
    "number": 65,
    "type": "single",
    "required_selections": 1,
    "question": "What protocol or technology allows data to transmit over redundant switch links?",
    "image": null,
    "options": [
      "EtherChannel",
      "DTP",
      "STP",
      "VTP"
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 6.1.1 EtherChannel is a link aggregation technology that groups multiple physical Ethernet links into a single logical link, allowing data to transmit over redundant paths simultaneously without being blocked by the Spanning Tree Protocol (STP). While STP prevents loops by disabling redundant paths, EtherChannel allows those physical links to remain active and functional by making them appear as a single connection to the network."
  },
  {
    "id": 66,
    "number": 66,
    "type": "multiple",
    "required_selections": 3,
    "question": "Refer to the exhibit. Which three hosts will receive ARP requests from host A, assuming that port Fa0/4 on both switches is configured to carry traffic for multiple VLANs? (Choose three.)",
    "image": "images/page_48_img_1.jpeg",
    "options": [
      "host B",
      "host C",
      "host D",
      "host E",
      "host F",
      "host G"
    ],
    "correct": [
      1,
      2,
      4
    ],
    "explanation": "Explanation: Topic 3.1.1 ARP requests are sent out as broadcasts. That means the ARP request is sent only throughout a specific VLAN. VLAN 1 hosts will only hear ARP requests from hosts on VLAN 1. VLAN 2 hosts will only hear ARP requests from hosts on VLAN 2."
  },
  {
    "id": 67,
    "number": 67,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. The network administrator configures both switches as displayed. However, host C is unable to ping host D and host E is unable to ping host F. What action should the administrator take to enable this communication?",
    "image": "images/page_49_img_1.png",
    "options": [
      "Associate hosts A and B with VLAN 10 instead of VLAN 1.",
      "Configure either trunk port in the dynamic desirable mode.",
      "Include a router in the topology.",
      "Remove the native VLAN from the trunk.",
      "Add the switchport nonegotiate command to the configuration of SW2."
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 3.5.3 If one trunk port is in auto DTP negotiation mode, a trunk will be formed if the adjacent switch port is placed in trunk or dynamic desirable mode."
  },
  {
    "id": 68,
    "number": 68,
    "type": "single",
    "required_selections": 1,
    "question": "What is the effect of entering the shutdown configuration command on a switch?",
    "image": null,
    "options": [
      "It enables BPDU guard on a specific port.",
      "It disables an unused port.",
      "It enables portfast on a specific switch interface.",
      "It disables DTP on a non-trunking interface."
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 11.1.1 The shutdown interface configuration command is used to administratively disable a switch port, which prevents any traffic from being sent or received through that interface. Issuing this command on all unused ports is a fundamental security best practice to protect a network from unauthorized access by ensuring those physical entry points remain inactive until needed."
  },
  {
    "id": 69,
    "number": 69,
    "type": "single",
    "required_selections": 1,
    "question": "What would be the primary reason an attacker would launch a MAC address overflow attack?",
    "image": null,
    "options": [
      "so that the switch stops forwarding traffic",
      "so that legitimate hosts cannot obtain a MAC address",
      "so that the attacker can see frames that are destined for other hosts",
      "so that the attacker can execute arbitrary code on the switch"
    ],
    "correct": [
      2
    ],
    "explanation": "Explanation: Topic 10.4.2 A MAC address overflow attack (or MAC flooding) aims to fill the switch's MAC address table with fake entries, forcing the switch to treat all subsequent incoming frames as unknown unicast traffic. When this happens, the switch floods those frames out of all ports on the VLAN, which allows the attacker to use packet sniffing software to capture and view data intended for other devices."
  },
  {
    "id": 70,
    "number": 70,
    "type": "single",
    "required_selections": 1,
    "question": "During the AAA process, when will authorization be implemented?",
    "image": null,
    "options": [
      "Immediately after successful authentication against an AAA data source",
      "Immediately after AAA accounting and auditing receives detailed reports",
      "Immediately after an AAA client sends authentication information to a centralized server",
      "Immediately after the determination of which resources a user can access"
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 10.2.4 AAA authorization is implemented immediately after the user is authenticated against a specific AAA data source."
  },
  {
    "id": 71,
    "number": 71,
    "type": "single",
    "required_selections": 1,
    "question": "A company security policy requires that all MAC addressing be dynamically learned and added to both the MAC address table and the running configuration on each switch. Which port security configuration will accomplish this?",
    "image": null,
    "options": [
      "auto secure MAC addresses",
      "dynamic secure MAC addresses",
      "static secure MAC addresses",
      "sticky secure MAC addresses"
    ],
    "correct": [
      3
    ],
    "explanation": "Explanation: Topic 11.1.4 With sticky secure MAC addressing, the MAC addresses can be either dynamically learned or manually configured and then stored in the address table and added to the running configuration file. In contrast, dynamic secure MAC addressing provides for dynamically learned MAC addressing that is stored only in the address table."
  },
  {
    "id": 72,
    "number": 72,
    "type": "multiple",
    "required_selections": 3,
    "question": "Which three Wi-Fi standards operate in the 2.4GHz range of frequencies? (Choose three.)",
    "image": null,
    "options": [
      "802.11a",
      "802.11b",
      "802.11g",
      "802.11n",
      "802.11ac"
    ],
    "correct": [
      1,
      2,
      3
    ],
    "explanation": "Explanation: Topic 12.1.4 802.11b and 802.11g operate in the 2.4GHz range, and 802.11n can operate in either the 2.4GHz or the 5GHz range. 802.11a and 802.11ac operate only in the 5GHz range of frequencies."
  },
  {
    "id": 73,
    "number": 73,
    "type": "multiple",
    "required_selections": 2,
    "question": "To obtain an overview of the spanning tree status of a switched network, a network engineer issues the show spanning-tree command on a switch. Which two items of information will this command display? (Choose two.)",
    "image": null,
    "options": [
      "The root bridge BID.",
      "The role of the ports in all VLANs.",
      "The status of native VLAN ports.",
      "The number of broadcasts received on each root port.",
      "The IP address of the management VLAN interface."
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Explanation: Topic 5.2 The show spanning-tree command will display the status of STP for all VLANs that are defined on a switch and other information including the root bridge BID. It does not show the number of broadcast packets received on the ports. The IP address of the management VLAN interface is not related to STP and is displayed by the show running-configuration command."
  },
  {
    "id": 74,
    "number": 74,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. Which trunk link will not forward any traffic after the root bridge election process is complete?",
    "image": "images/page_53_img_1.jpeg",
    "options": [
      "Trunk1",
      "Trunk2",
      "Trunk3",
      "Trunk4"
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 5.2 S4 has the lowest bridge ID, thus S4 is the root bridge. Because the path cost S1-S2-S4 is lower than the path cost S1-S3-S4, path S1-S2-S4 is the preferred path for S1 to reach S4. Thus, STP will set the S1 port Fa0/1 to a blocking state, and the trunk link Trunk2 will not forward any traffic."
  },
  {
    "id": 75,
    "number": 75,
    "type": "single",
    "required_selections": 1,
    "question": "Which method of IPv6 prefix assignment relies on the prefix contained in RA messages?",
    "image": null,
    "options": [
      "EUI-64",
      "SLAAC",
      "static",
      "stateful DHCPv6"
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 8.2.1 Stateless Address Autoconfiguration (SLAAC) relies on information received in router advertisement (RA) messages in order to automatically create an IPv6 address. The RA messages contain information such as the network prefix and prefix length, which the host combines with an interface ID in order to make a unique IPv6 unicast address."
  },
  {
    "id": 76,
    "number": 76,
    "type": "multiple",
    "required_selections": 2,
    "question": "Which two protocols are used to provide server-based AAA authentication? (Choose two.)",
    "image": null,
    "options": [
      "802.1x",
      "SSH",
      "SNMP",
      "TACACS+",
      "RADIUS"
    ],
    "correct": [
      3,
      4
    ],
    "explanation": "Explanation: Topic 10.2.3 Server-based AAA authentication uses an external TACACS or RADIUS authentication server to maintain a username and password database. When a client establishes a connection with an AAA enabled device, the device authenticates the client by querying the authentication servers."
  },
  {
    "id": 77,
    "number": 77,
    "type": "single",
    "required_selections": 1,
    "question": "A network administrator is configuring a WLAN. Why would the administrator disable the broadcast feature for the SSID?",
    "image": null,
    "options": [
      "to eliminate outsiders scanning for available SSIDs in the area",
      "to reduce the risk of interference by external devices such as microwave ovens",
      "to reduce the risk of unauthorized APs being added to the network",
      "to provide privacy and integrity to wireless traffic by using encryption"
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 12.7.2 Disabling the SSID broadcast feature, also known as SSID cloaking, prevents an Access Point (AP) from including the network name in its periodic beacon frames. While this does not provide strong security against professional attackers, it effectively hides the network from casual outsiders or unauthorized users scanning for available wireless networks, as they must manually configure the SSID on their devices to attempt a connection."
  },
  {
    "id": 78,
    "number": 78,
    "type": "single",
    "required_selections": 1,
    "question": "Which mitigation technique would prevent rogue servers from providing false IP configuration parameters to clients?",
    "image": null,
    "options": [
      "implementing port security",
      "turning on DHCP snooping",
      "disabling CDP on edge ports",
      "implementing port-security on edge ports"
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 11.3.2 Like Dynamic ARP Inspection (DAI), IP Source Guard (IPSG) needs to determine the validity of MAC-address-to-IP-address bindings. To do this IPSG uses the bindings database built by DHCP snooping."
  },
  {
    "id": 79,
    "number": 79,
    "type": "single",
    "required_selections": 1,
    "question": "A network administrator configures the port security feature on a switch. The security policy specifies that each access port should allow up to two MAC addresses. When the maximum number of MAC addresses is reached, a frame with the unknown source MAC address is dropped and a notification is sent to the syslog server. Which security violation mode should be configured for each access port?",
    "image": null,
    "options": [
      "shutdown",
      "restrict",
      "warning",
      "protect"
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 11.1.6 In port security implementation, an interface can be configured for one of three violation modes: Protect – a port security violation causes the interface to drop packets with unknown source addresses and no notification is sent that a security violation has occurred. Restrict – a port security violation causes the interface to drop packets with unknown source addresses and to send a notification that a security violation has occurred. Shutdown – a port security violation causes the interface to immediately become error-disabled and turns off the port LED. No notification is sent that a security violation has occurred."
  },
  {
    "id": 80,
    "number": 80,
    "type": "single",
    "required_selections": 1,
    "question": "What protocol or technology defines a group of routers, one of them defined as active and another one as standby?",
    "image": null,
    "options": [
      "EtherChannel",
      "VTP",
      "HSRP",
      "DTP"
    ],
    "correct": [
      2
    ],
    "explanation": "Explanation: Topic 9.2.1 Hot Standby Router Protocol (HSRP) is a Cisco-proprietary First Hop Redundancy Protocol (FHRP) designed to provide default gateway redundancy. It operates by grouping multiple physical routers into a single virtual router where one device is elected as active to forward packets, while another is designated as standby to monitor the group and take over forwarding responsibilities if the active device fails."
  },
  {
    "id": 81,
    "number": 81,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. After attempting to enter the configuration that is shown in router RTA, an administrator receives an error and users on VLAN 20 report that they are unable to reach users on VLAN 30. What is causing the problem?",
    "image": "images/page_57_img_1.jpeg",
    "options": [
      "There is no address on Fa0/0 to use as a default gateway.",
      "RTA is using the same subnet for VLAN 20 and VLAN 30.",
      "Dot1q does not support subinterfaces.",
      "The no shutdown command should have been issued on Fa0/0.20 and Fa0/0.30."
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 4.2.4 The IP 192.168.2.49/27 and 192.168.3.62/27 belong to the same subnet of 192.168.3.32/27. Valid host IPv4 addresses include 192.168.3.33 to 192.168.3.62."
  },
  {
    "id": 82,
    "number": 82,
    "type": "multiple",
    "required_selections": 3,
    "question": "Which three pairs of trunking modes will establish a functional trunk link between two Cisco switches? (Choose three.)",
    "image": null,
    "options": [
      "dynamic auto - dynamic auto",
      "access - trunk",
      "dynamic desirable - trunk",
      "access - dynamic auto",
      "dynamic desirable - dynamic desirable",
      "dynamic desirable - dynamic auto"
    ],
    "correct": [
      2,
      4,
      5
    ],
    "explanation": "Explanation: Topic 3.5.3 Dynamic Trunking Protocol (DTP) manages trunk negotiation between Cisco switch ports on a point-to-point basis. Dynamic desirable is an active mode that initiates negotiation and will successfully establish a functional trunk when the neighbor is configured in trunk, dynamic desirable, or dynamic auto modes. In contrast, if both ends are in dynamic auto, they both wait passively for the other to initiate negotiation, resulting in a non-trunking access link instead."
  },
  {
    "id": 83,
    "number": 83,
    "type": "single",
    "required_selections": 1,
    "question": "A technician is configuring a router for a small company with multiple WLANs and doesn’t need the complexity of a dynamic routing protocol. What should be done or checked?",
    "image": null,
    "options": [
      "Verify that there is not a default route in any of the edge router routing tables.",
      "Create static routes to all internal networks and a default route to the internet.",
      "Create extra static routes to the same location with an AD of 1.",
      "Check the statistics on the default route for oversaturation."
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 14.4.5 In smaller networks where the complexity of a dynamic routing protocol is not required, static routes are used to manually define paths to internal network segments. Additionally, a default static route (0.0.0.0/0) is configured to serve as the \"gateway of last resort,\" directing all traffic destined for the internet toward the service provider's next-hop router."
  },
  {
    "id": 84,
    "number": 84,
    "type": "single",
    "required_selections": 1,
    "question": "A company is deploying a wireless network in the distribution facility in a Boston suburb. The warehouse is quite large and it requires multiple access points to be used. Because some of the company devices still operate at 2.4GHz, the network administrator decides to deploy the 802.11g standard. Which channel assignments on the multiple access points will make sure that the wireless channels are not overlapping?",
    "image": null,
    "options": [
      "channels 1, 5, and 9",
      "channels 1, 6, and 11",
      "channels 1, 7, and 13",
      "channels 2, 6, and 10"
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 12.5.2 In the North America domain, 11 channels are allowed for 2.4GHz wireless networking. Among these 11 channels, the combination of channels 1, 6, and 11 are the only non- overlapping channel combination."
  },
  {
    "id": 85,
    "number": 85,
    "type": "single",
    "required_selections": 1,
    "question": "A network administrator of a small advertising company is configuring WLAN security by using the WPA2 PSK method. Which credential do office users need in order to connect their laptops to the WLAN?",
    "image": null,
    "options": [
      "the company username and password through Active Directory service",
      "a key that matches the key on the AP",
      "a user passphrase",
      "a username and password configured on the AP"
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 12.7.5 When a WLAN is configured with WPA2 PSK, wireless users must know the pre-shared key to associate and authenticate with the AP."
  },
  {
    "id": 86,
    "number": 86,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. What are the possible port roles for ports A, B, C, and D in this RSTP-enabled network?",
    "image": "images/page_60_img_1.png",
    "options": [
      "alternate, designated, root, root",
      "designated, alternate, root, root",
      "alternate, root, designated, root",
      "designated, root, alternate, root"
    ],
    "correct": [
      0
    ],
    "explanation": "Explanation: Topic 5.2.1 Because S1 is the root bridge, B is a designated port, and C and D root ports. RSTP supports a new port type, alternate port in discarding state, that can be port A in this scenario."
  },
  {
    "id": 87,
    "number": 87,
    "type": "single",
    "required_selections": 1,
    "question": "Refer to the exhibit. Which static route would an IT technician enter to create a backup route to the 172.16.1.0 network that is only used if the primary RIP learned route fails?",
    "image": "images/page_61_img_1.png",
    "options": [
      "ip route 172.16.1.0 255.255.255.0 s0/0/0",
      "ip route 172.16.1.0 255.255.255.0 s0/0/0 121",
      "ip route 172.16.1.0 255.255.255.0 s0/0/0 111",
      "ip route 172.16.1.0 255.255.255.0 s0/0/0 91"
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 15.4.1 A backup static route is called a floating static route. A floating static route has an administrative distance greater than the administrative distance of another static route or dynamic route."
  },
  {
    "id": 88,
    "number": 88,
    "type": "single",
    "required_selections": 1,
    "question": "What mitigation plan is best for thwarting a DoS attack that is creating a MAC address table overflow?",
    "image": null,
    "options": [
      "Disable DTP.",
      "Disable STP.",
      "Enable port security.",
      "Place unused ports in an unused VLAN."
    ],
    "correct": [
      2
    ],
    "explanation": "Explanation: Topic 11.1.2 A MAC address (CAM) table overflow attack, buffer overflow, and MAC address spoofing can all be mitigated by configuring port security. A network administrator would typically not want to disable STP because it prevents Layer 2 loops. DTP is disabled to prevent VLAN hopping. Placing unused ports in an unused VLAN prevents unauthorized wired connectivity."
  },
  {
    "id": 89,
    "number": 89,
    "type": "single",
    "required_selections": 1,
    "question": "A network engineer is troubleshooting a newly deployed wireless network that is using the latest 802.11 standards. When users access high bandwidth services such as streaming video, the wireless network performance is poor. To improve performance the network engineer decides to configure a 5 Ghz frequency band SSID and train users to use that SSID for streaming media services. Why might this solution improve the wireless network performance for that type of service?",
    "image": null,
    "options": [
      "Requiring the users to switch to the 5 GHz band for streaming media is inconvenient and will result in fewer users accessing these services.",
      "The 5 GHz band has more channels and is less crowded than the 2.4 GHz band, which makes it more suited to streaming multimedia.",
      "The 5 GHz band has a greater range and is therefore likely to be interference-free.",
      "The only users that can switch to the 5 GHz band will be those with the latest wireless NICs, which will reduce usage."
    ],
    "correct": [
      1
    ],
    "explanation": "Explanation: Topic 13.4.3 Wireless range is determined by the access point antenna and output power, not the frequency band that is used. In this scenario it is stated that all users have wireless NICs that comply with the latest standard, and so all can access the 5 GHz band. Although some users may find it inconvenient to switch to the 5 Ghz band to access streaming services, it is the greater number of channels, not just fewer users, that will improve network performance."
  }
];

if (typeof module !== 'undefined') { module.exports = EXAM_QUESTIONS; }

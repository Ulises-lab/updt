lsblk

umount /dev/sdb1

mkfs.vfat -F 32 /dev/sdb1

mkfs.vfat -F 32 -n 'live-usb' /dev/sdb1
